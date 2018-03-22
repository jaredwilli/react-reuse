import React, { Component } from 'react';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage.js';
import componentData from '../../src/componentData';

class Docs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            route: window.location.hash.substr(1)
        };
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            });
        });
    }

    render() {
        const { route } = this.state;
        const component = route
            ? componentData.filter(component => component.name === route)[0]
            : componentData[0];


        return (
            <div className="docs">
                <h1>React Reuse</h1>

                <Navigation components={componentData.map(component => component.name)} />
                <ComponentPage component={component} />
            </div>
        );
    }
}

export default Docs;
