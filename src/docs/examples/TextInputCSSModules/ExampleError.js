import React from 'react';
import TextInputCSSModules from 'react-reuse/TextInputCSSModules';

/** Required TextBox with Error */
const ExampleError = () => {
    const showMessage = () => {
        /* eslint-disable no-alert */
        alert('Changed!');
    };

    return (
        <TextInputCSSModules
            htmlId="example-error"
            label="First Name"
            name="firstname"
            onChange={() => showMessage()}
            error="First name is required"
            required
        />
    );
};

export default ExampleError;
