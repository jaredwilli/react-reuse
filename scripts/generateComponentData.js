const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const parse = require('react-docgen').parse;
const chokidar = require('chokidar');

const paths = {
    examples: path.join(__dirname, '../src', 'docs', 'examples'),
    components: path.join(__dirname, '../src', 'components'),
    output: path.join(__dirname, '../config', 'componentData.js')
};

const enableWatchMode = process.argv.slice(2) == '--watch';
if (enableWatchMode) {
    // Regenerate component data when components change
    chokidar
        .watch([paths.examples, paths.components])
        .on('change', (event, path) => {
            generate(paths);
        });
} else {
    // Generate component metadata
    generate(paths);
}

function generate(paths) {
    let errors = [];

    const componentData = getDirectories(paths.components).map(
        componentName => {
            try {
                return getComponentData(paths, componentName);
            } catch (error) {
                errors.push(
                    `An error occurred whil attemping to generate metadata for ${componentName}. ${error}`
                );
            }
        }
    );

    writeFile(
        paths.output,
        'module.exports = ' +
            JSON.stringify(errors.length ? errors : componentData)
    );
}

function getComponentData(paths, componentName) {
    const content = readFile(
        path.join(paths.components, componentName, `${componentName}.js`)
    );
    const info = parse(content);

    return {
        name: componentName,
        description: info.description,
        props: info.props,
        code: content,
        examples: getExampleData(paths.examples, componentName)
    };
}

function getExampleData(examplesPath, componentName) {
    const examples = getExampleFiles(examplesPath, componentName);

    return examples.map(file => {
        const filePath = path.join(examplesPath, componentName, file);
        const content = readFile(filePath);
        const info = parse(content);

        return {
            name: file.slice(0, -3), // remove .js from file name
            description: info.description,
            code: content
        };
    });
}

function getExampleFiles(examplesPath, componentName) {
    let exampleFiles = [];

    try {
        exampleFiles = getFiles(path.join(examplesPath, componentName));
    } catch (error) {
        console.log(chalk.red(`No examples found for ${componentName}.`));
    }

    return exampleFiles;
}

function getDirectories(filePath) {
    return fs
        .readdirSync(filePath)
        .filter(file => fs.statSync(path.join(filePath, file)).isDirectory());
}

function getFiles(filePath) {
    return fs
        .readdirSync(filePath)
        .filter(file => fs.statSync(path.join(filePath, file)).isFile());
}

function writeFile(filePath, content) {
    fs.writeFile(filePath, content, error => {
        error
            ? console.log(chalk.red(error))
            : console.log(chalk.green('Component data saved.'));
    });
}

function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
}
