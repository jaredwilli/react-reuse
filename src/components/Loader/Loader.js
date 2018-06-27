import React from 'react';
import PropTypes from 'prop-types';

const Loader = props => {
    return (
        <svg
            width="22px"
            height="22px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid">
            <circle
                cx="50"
                cy="50"
                fill="none"
                stroke={props.stroke}
                strokeWidth="10"
                r="45"
                strokeDasharray="212.05750411731105 72.68583470577035"
                transform="rotate(276 50 50)">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    calcMode="linear"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="1s"
                    begin="0s"
                    repeatCount="indefinite">
                </animateTransform>
            </circle>
        </svg>
    );
};

Loader.defaultProps = {
    stroke: '#29292A'
};

Loader.propTypes = {
    stroke: PropTypes.string
};

export default Loader;
