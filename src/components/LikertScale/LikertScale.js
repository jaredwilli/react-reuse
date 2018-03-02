import React from 'react';
import PropTypes from 'prop-types';
import DotIcon from '../DotIcon';

const LikertScale = ({ labels = [], ...props }) => {
    return (
        <div className="likert-scale">
            <DotIcon />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="298"
                height="2"
                viewBox="0 0 298 2">
                <path
                    fill="none"
                    fill-rule="evenodd"
                    stroke="#959595"
                    d="M297.656 1H.503"
                />
            </svg>
        </div>
    );
}

LikertScale.propTypes = {
    /** List of labels to be displayed for each point */
    labels: PropTypes.array,
    /** The value of the chart where the dot should display */
    value: PropTypes.number
};

export default LikertScale;
