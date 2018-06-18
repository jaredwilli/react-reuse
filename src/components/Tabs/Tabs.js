import React from 'react';
import PropTypes from 'prop-types';

import './Tabs.css';

const Tabs = class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: props.selected
        };
    }

    _renderTitles = () => {
        function _labels(child, index) {
            const activeClass = this.state.selected === index
                ? 'active'
                : '';

            return (
                <li
                    key={index}
                    className={activeClass}
                    onClick={e => this.handleClick(index, e)}
                >
                    {child.props.label}
                </li>
            );
        }

        return (
            <ul className="tabs__labels">
                {this.props.children.map(_labels.bind(this))}
            </ul>
        );
    }

    _renderContent = () => {
        return (
            <div className="tabs__content">
                {this.props.children[this.state.selected]}
            </div>
        );
    }

    handleClick = (index, event) => {
        event.preventDefault();

        this.setState({
            selected: index
        });
    }

    render() {
        return (
            <div className="tabs">
                {this._renderTitles()}
                {this._renderContent()}
            </div>
        );
    }
};

Tabs.propTypes = {
    /** The selected tab number as an index */
    selected: PropTypes.number,

    /** The content of the selected tab pane */
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element
    ]).isRequired
};

Tabs.defaultProps = {
    selected: 0
};

export default Tabs;
