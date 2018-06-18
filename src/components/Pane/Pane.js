import React from 'react';
import PropTypes from 'prop-types';

const Pane = props => {
    return (
        <div>
            {props.children}
        </div>
    );
};

Pane.defaultProps = {
    /** The label of the pane */
    label: PropTypes.string.isRequired,

    /** The children or content of the pane */
    children: PropTypes.element.isRequired
};

export default Pane;
