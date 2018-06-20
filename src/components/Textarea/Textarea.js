import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Label from '../Label';

import './Textarea.css';

/** Textarea with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */
const Textarea = ({
    htmlId,
    name,
    placeholder,
    onChange,
    value,
    children,
    label,
    error,
    resize,
    width,
    height,
    required,
    ...props
}) => {

    const style = {
        borderColor: error ? 'red' : '#ccc',
        resize: resize && resize,
        width: width && width,
        height: height && height
    };

    const myClass = classNames('mg-textarea', {
        ['mg-error']: error
    });

    return (
        <div className={myClass}>
            <Label
                htmlFor={htmlId}
                label={label}
                required={required}
            />

            <textarea
                id={htmlId}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                style={style}
                value={value}
                {...props}
            >
            </textarea>

            {children}

            {error &&
                <div className={classNames({ 'mg-error-msg': error })}>
                    {error}
                </div>
            }
        </div>
    );
};

Textarea.defaultProps = {
    resize: 'none',
    required: false
};

Textarea.propTypes = {
    /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
    htmlId: PropTypes.string.isRequired,

    /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
    name: PropTypes.string.isRequired,

    /** Input label */
    label: PropTypes.string,

    /** Input type */
    type: PropTypes.oneOf(['text', 'number', 'password']),

    /** Mark label with asterisk if set to true */
    required: PropTypes.bool,

    /** Function to call onChange */
    onChange: PropTypes.func.isRequired,

    /** Placeholder to display when empty */
    placeholder: PropTypes.string,

    /** Value */
    value: PropTypes.any,

    /** Width */
    width: PropTypes.string,

    /** Height */
    height: PropTypes.string,

    /** Resize value or none */
    resize: PropTypes.string,

    /** String to display when error occurs */
    error: PropTypes.string,

    /** Child component to display next to the input */
    children: PropTypes.node
};

export default Textarea;
