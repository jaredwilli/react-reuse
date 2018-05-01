import React from 'react';
import PropTypes from 'prop-types';

const DotIcon = props => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 10 10"
    >
        <circle
            cx="963"
            cy="3070"
            r="5"
            fill={props.fill}
            fillRule="evenodd"
            transform="translate(-958 -3065)"
        />
    </svg>
);

DotIcon.propTypes = {
    /** The size of the dot */
    size: PropTypes.number,
    /** The fill color for the dot */
    fill: PropTypes.string
};

DotIcon.defaultProps = {
    size: 5,
    fill: '#959595'
};

export default DotIcon;
