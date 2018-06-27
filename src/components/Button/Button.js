import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Loader from '../Loader';

import './Button.css';

const Button = ({
    htmlId,
    name,
    type,
    size,
    classname,
    onClick,
    children,
    disabled,
    isLoading,
    ...props
}) => {

    const buttonClass = classNames('btn mg-button', {
        [classname]: classname,
        [size]: size
    });

    return (
        <button
            className={buttonClass}
            id={htmlId}
            name={name}
            type={type}
            onClick={onClick}
        >
            {isLoading && <Loader stroke="#fff" />}

            {children}
        </button>
    );
};

Button.defaultProps = {
    children: 'Submit',
    type: 'submit',
    classname: '',
    size: ''
};

Button.propTypes = {
    /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
    htmlId: PropTypes.string.isRequired,

    /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
    name: PropTypes.string.isRequired,

    /** Input type */
    type: PropTypes.oneOf(['button', 'submit', 'reset']),

    /** Function to call onClick */
    onClick: PropTypes.func.isRequired,

    /** Child component to display next to the input */
    children: PropTypes.node,

    /** Size classname to use for different sizes */
    size: PropTypes.string,

    /** Any additional classnames to add to it */
    classname: PropTypes.string,

    /** Should the button be disabled */
    disabled: PropTypes.bool,

    /** If loading then show loader icon */
    isLoading: PropTypes.bool
};

export default Button;
