# React Reuse

A resuable component library for react that is self-documenting and automatically generating output for examples. We all just want to have a simple way to build features and reusable components that will generate documentation and create a list of real examples that you can interact with on an actual web page. This is what I've created here.

[![Build Status](https://travis-ci.org/jaredwilli/react-reuse.svg?branch=master)](https://travis-ci.org/jaredwilli/react-reuse)
[![codebeat badge](https://codebeat.co/badges/1396f00a-f7ce-43a0-af73-1bfc2298213c)](https://codebeat.co/projects/github-com-jaredwilli-react-reuse-master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9d42183cd016465cb588eac8400ef73e)](https://www.codacy.com/app/jaredwilli/react-reuse?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=jaredwilli/react-reuse&amp;utm_campaign=Badge_Grade)
[![dependencies Status](https://david-dm.org/jaredwilli/react-reuse/status.svg)](https://david-dm.org/jaredwilli/react-reuse)
[![license](https://img.shields.io/npm/l/react-reuse.svg?style=flat-square)](https://github.com/jaredwilli/react-reuse/blob/master/LICENSE)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License:](https://img.shields.io/npm/l/cross-env.svg?style=flat-square)](https://github.com/jaredwilli/react-reuse/blob/master/other/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![npm](https://img.shields.io/npm/v/react-reuse.svg?style=flat-square)](https://www.npmjs.com/package/react-reuse)



-------

## Install

```
npm install react-reuse
```

# Docs
[Component documentation](https://jaredwilli.github.io/react-reuse/)

# Contributing
When you create a new component in the component library, you must create a folder for it in /components, and a folder in /examples. The easiest way to do this is to just copy existing components and their files and just change the names and contents. That way you have all the files needed for a complete workflow for your components.

Once the component has been completed and you are ready to publish the changes to NPM, run the following to bump the version:
```
npm version major|minor|patch
```

Commit your changes, and push your branch.

# Publishing
To publish the package to NPM simply run the publish command. This will run build:lib which runs all the necessary build scripts for building the library for publishing and public use.

```
npm publish
```

# Deploying
To deploy the docs for the component library to the github pages simply run the deploy script. This will run build:docs which runs the build.js script to generate the documentation and all the necessary output for the page to render the component library.

```
npm run deploy
```


## License

[MIT License](https://opensource.org/licenses/MIT)
