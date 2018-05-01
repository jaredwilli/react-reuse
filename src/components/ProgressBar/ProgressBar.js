import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends Component {
    getColor = () => {
        if (this.props.percent === 100) {
            return 'green';
        }

        return this.props.percent > 50
            ? 'lightgreen'
            : 'red';
    }

    getWidthAsPercentOfTotalWidth = () => {
        return parseInt(this.props.width * (this.props.percent / 100), 10);
    }

    render() {
        const { percent, width, height } = this.props;

        return (
            <div style={{ border: '1px solid #ccc', width: width }}>
                <div style={{
                    backgroundColor: this.getColor(percent),
                    width: this.getWidthAsPercentOfTotalWidth(),
                    height
                }}
                />
            </div>
        );
    }
}

ProgressBar.propTypes = {
    /** Percent of progress completed */
    percent: PropTypes.number.isRequired,
    /** Bar width */
    width: PropTypes.number.isRequired,
    /** Bar height */
    height: PropTypes.number
};

ProgressBar.defaultProps = {
    height: 5
};

export default ProgressBar;
