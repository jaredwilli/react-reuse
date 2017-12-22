import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import PasswordInput from '../PasswordInput';

/** Registration form with built-in validation. */
class RegistrationForm extends React.Component {
    render() {
        return (
            <div />
        );
    };
};

RegistrationForm.propTypes = {
    /** Message displayed upon successful submission */
    confirmationMessage: PropTypes.string,

    /** Called when form is submitted */
    onSubmit: PropTypes.func.isRequired,

    /** Minimum password length */
    minPasswordLength: PropTypes.number
};

RegistrationForm.defaultProps = {
    confirmationMessage: 'Thanks for registering',
    minPasswordLength: 8
};

export default RegistrationForm;
