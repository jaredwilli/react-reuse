import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

import './Textarea.css';

/** Textarea with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */
const Textarea = ({ htmlId, ...props }) => {

    const style = {
        borderColor: props.error ? 'red' : '#ccc',
        resize: props.resize && props.resize,
        width: props.width && props.width,
        height: props.height && props.height
    };

    return (
        <div className="mg-textarea">
            <Label
                htmlFor={htmlId}
                label={props.label}
                required={props.required}
            />

            <textarea
                id={htmlId}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
                style={style}
                {...props}
            >
                {props.value}
            </textarea>

            {props.children}

            {props.error &&
                <div style={{ color: 'red' }}>
                    {props.error}
                </div>
            }
        </div>
    );
};

Textarea.defaultProps = {
    resize: 'none'
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
