import React from 'react';
import PropTypes from 'prop-types';

/** A basic example component description for Hello component */
export default function Hello() {
    return (
        <div>
            Hello world
        </div>
    );
};

Hello.propTypes = {
    /** Message to display */
    message: PropTypes.string
};

Hello.defaultProps = {
    message: 'World'
};
