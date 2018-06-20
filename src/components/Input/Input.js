import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Label from '../Label';

import './Input.css';

/** Input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */
const Input = ({
    htmlId,
    name,
    placeholder,
    onChange,
    value,
    label,
    children,
    error,
    width,
    height,
    type,
    required,
    ...props
}) => {

    const style = {
        borderColor: error ? 'red' : '#ccc',
        width: width && width,
        height: height && height
    };

    const myClass = classNames('mg-input', {
        ['mg-error']: error
    });

    return (
        <div className={myClass}>
            {label &&
                <Label
                    htmlFor={htmlId}
                    label={label}
                    required={required}
                />
            }

            <input
                id={htmlId}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={style}
                {...props}
            />
            {children}

            {error &&
                <div className={classNames({ 'mg-error-msg': error })}>
                    {error}
                </div>
            }
        </div>
    );
};

Input.defaultProps = {
    type: 'text',
    required: false
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
