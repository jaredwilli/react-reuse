import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

import './Input.css';

/** Input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */
const Input = ({ type = 'text', required = false, ...props }) => {

    const style = {
        borderColor: props.error ? 'red' : '#ccc',
        width: props.width && props.width,
        height: props.height && props.height
    };

    return (
        <div className="mg-input">
            {props.label &&
                <Label
                    htmlFor={props.htmlId}
                    label={props.label}
                    required={required}
                />
            }

            <input
                id={props.htmlId}
                type={type}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                style={style}
                {...props}
            />
            {props.children}

            {props.error &&
                <div style={{ color: 'red' }}>
                    {props.error}
                </div>
            }
        </div>
    );
};

Input.propTypes = {
    /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
    htmlId: PropTypes.string.isRequired,

    /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
    name: PropTypes.string.isRequired,

    /** Input label */
    label: PropTypes.string,

    /** Input type */
    type: PropTypes.oneOf(['text', 'email', 'number', 'password']),

    /** Mark label with asterisk if set to true */
    required: PropTypes.bool,

    /** Function to call onChange */
    onChange: PropTypes.func,

    /** Placeholder to display when empty */
    placeholder: PropTypes.string,

    /** Width */
    width: PropTypes.string,

    /** Height */
    height: PropTypes.string,

    /** Value */
    value: PropTypes.any,

    /** String to display when error occurs */
    error: PropTypes.string,

    /** Child component to display next to the input */
    children: PropTypes.node
};

export default Input;
