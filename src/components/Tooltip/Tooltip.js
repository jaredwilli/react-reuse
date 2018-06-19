import React from 'react';
import PropTypes from 'prop-types';

import QuestionMark from '../QuestionMark/QuestionMark';

import './Tooltip.css';

/** Tooltip component that takes a label for the text to tooltip and children for the content of the tooltip itself. */
class Tooltip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        };
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.onMouseOut);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.onMouseOut);
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
        const { label, click } = this.props;

        if (click) {
            return (
                <div
                    className={className}
                    onClick={() => this.onMouseOver()}
                >
                    <div className="tooltip-label">
                        {label}

                        <QuestionMark />
                    </div>

                    <div className="tooltip-content">
                        {this.props.children}
                    </div>
                </div>
            );
        }

        return (
            <div
                className={className}
                onMouseEnter={() => this.onMouseOver()}
                onMouseOut={() => this.onMouseOut()}
            >
                <div className="tooltip-label">
                    {label}

                    <QuestionMark />
                </div>

                <div className="tooltip-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Tooltip.defaultProps = {
    click: false
};

Tooltip.propTypes = {
    /** The text to show for the tooltip that you hover */
    label: PropTypes.string.isRequired,

    /** If the tooltip should be activated on click this is true */
    click: PropTypes.bool
};

export default Tooltip;
