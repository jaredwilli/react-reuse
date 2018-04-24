import React from 'react';
import PropTypes from 'prop-types';

import QuestionMark from '../QuestionMark/QuestionMark';

import './Tooltip.css';

/** Star Rating component that sets the selection on click and has hover animation */

class Tooltip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        };
    }

    onMouseOver = () => {
        this.setState({
            isVisible: true
        });
    }

    onMouseOut = () => {
        this.setState({
            isVisible: false
        });
    }

    render() {
        const isVisible = this.state.isVisible ? 'is-visible' : 'is-hidden';
        const className = `tooltip ${isVisible}`;

        return (
            <div className={className}
                onMouseEnter={() => this.onMouseOver()}
                onMouseOut={() => this.onMouseOut()}
                onTouchStart={() => this.onMouseOver()}>
                <div className="tooltip-label">
                    {this.props.label}

                    <QuestionMark />
                </div>

                <div className="tooltip-content"
                    onMousOver={() => this.setState({isVisible: true})}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Tooltip.propTypes = {
    /** The text to show for the tooltip that you hover */
    label: PropTypes.string.isRequired
};

export default Tooltip;
