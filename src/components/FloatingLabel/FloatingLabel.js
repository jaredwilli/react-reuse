import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './FloatingLabel.css';

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
        const { autoComplete, errorMsg, id, isDisabled, pattern, placeholder, type } = this.props;
        const { hasValue, hasError } = this.state;

        const inputClasses = classNames('fl-input', {
            'fl-valid': hasValue && !hasError
        }, {
            'fl-invalid': hasValue && hasError
        });

        const errMsgClasses = classNames({
            'fl-error-msg': errorMsg
        }, {
            'fl-error-show': (hasError && hasValue) && (errorMsg && pattern)
        });

        return (
            <div className="fl-input-container">
                <input
                    id={id}
                    type={type}
                    name={name || id}
                    autoComplete={autoComplete}
                    className={inputClasses}
                    disabled={isDisabled}
                    onBlur={this.onBlur}
                    onChange={pattern ? this.onChange : null}
                />

                <label
                    className="fl-input-label"
                    htmlFor={id}>
                    {placeholder}
                </label>

                <span className="fl-input-bar"></span>

                {errorMsg &&
                    <span className={errMsgClasses}>{errorMsg}</span>
                }
            </div>
        );
    }
}

FloatingLabel.defaultProps = {
    autoComplete: false,
    isDisabled: false
};

FloatingLabel.propTypes = {
    autoComplete: PropTypes.bool,
    errorMsg: PropTypes.string,
    id: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    pattern: PropTypes.any,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default FloatingLabel;
