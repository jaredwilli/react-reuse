import React from 'react';
import PropTypes from 'prop-types';

/** Pane component for the atom of a tabs component */
const Pane = props => (
    <div className="tab-pane">
        {props.children}
    </div>
);

Pane.propTypes = {
    /** The label of the pane */
    label: PropTypes.string.isRequired,

    /** The children or content of the pane */
    children: PropTypes.element.isRequired
};

export default Pane;
