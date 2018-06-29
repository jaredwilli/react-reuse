import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './FloatingLabel.css';

/** Floating label input field */
class FloatingLabel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasValue: false,
            hasError: false
        };
    }

    _bind = (...methods) => {
        methods.map(method => this[method] = this[method].bind(this));
    }

    onBlur = event => {
        this.setState({
            hasValue: !!event.currentTarget.value
        });
    }

    onChange = event => {
        const { pattern } = this.props;

        this.setState({
            hasError: !pattern.test(event.currentTarget.value),
            hasValue: !!event.currentTarget.value
        });
    }

    render() {
        const {
            autoComplete,
            errorMsg,
            id,
            isDisabled,
            pattern,
            placeholder,
            required,
            type,
            width,
            height
        } = this.props;

        const { hasValue, hasError } = this.state;

        const inputClasses = classNames('fl-input', {
            'fl-valid': hasValue && !hasError
        }, {
            'fl-invalid': hasValue && hasError
        });

        const textareaClasses = classNames('fl-textarea', {
            'fl-valid': hasValue && !hasError
        }, {
            'fl-invalid': hasValue && hasError
        });

        const errMsgClasses = classNames({
            'fl-error-msg': errorMsg
        }, {
            'fl-error-show': (hasError && hasValue) && (errorMsg && pattern)
        });

        const style = {
            width: width && width,
            height: height && height
        };

        if (type === 'textarea') {
            return (
                <div className="fl-textarea-container">
                    <textarea
                        id={id}
                        type={type}
                        name={name || id}
                        style={style}
                        className={inputClasses}
                        autoComplete={autoComplete}
                        disabled={isDisabled}
                        onBlur={this.onBlur}
                        onChange={pattern ? this.onChange : null}
                    />

                    <label
                        className="fl-label"
                        htmlFor={id}
                    >
                        {required &&
                            <span className="required-indicator">*</span>
                        }

                        <span>{placeholder}</span>
                    </label>

                    {errorMsg &&
                        <span className={errMsgClasses}>{errorMsg}</span>
                    }
                </div>
            );
        }

        return (
            <div className="fl-input-container">
                <input
                    id={id}
                    type={type}
                    name={name || id}
                    style={style}
                    className={inputClasses}
                    autoComplete={autoComplete}
                    disabled={isDisabled}
                    onBlur={this.onBlur}
                    onChange={pattern ? this.onChange : null}
                />

                <label
                    className="fl-label"
                    htmlFor={id}
                >
                    {required &&
                        <span className="required-indicator">*</span>
                    }

                    <span>{placeholder}</span>
                </label>

                {errorMsg &&
                    <span className={errMsgClasses}>{errorMsg}</span>
                }
            </div>
        );
    }
}

FloatingLabel.defaultProps = {
    autoComplete: 'false',
    isDisabled: false,
    resize: 'none',
    required: false
};

FloatingLabel.propTypes = {
    /** Should it autocomplete or not? */
    autoComplete: PropTypes.bool,

    /** Error message to display */
    errorMsg: PropTypes.string,

    /** ID of the field */
    id: PropTypes.string.isRequired,

    /** Is it disabled or not */
    isDisabled: PropTypes.bool,

    /** Regular expression pattern to validate on */
    pattern: PropTypes.any,

    /** The placeholder text or label text to float */
    placeholder: PropTypes.string.isRequired,

    /** Is this a required field */
    required: PropTypes.bool,

    /** The input type to use */
    type: PropTypes.string.isRequired,

    /** The width of the form field */
    width: PropTypes.string,

    /** The height of the form field */
    height: PropTypes.string,

    /** Resize value or none */
    resize: PropTypes.string
};

export default FloatingLabel;
