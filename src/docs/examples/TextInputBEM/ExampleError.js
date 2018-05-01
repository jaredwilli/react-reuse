import React from 'react';
import TextInputBEM from 'react-reuse/TextInputBEM';

/** Required TextBox with Error */
const ExampleError = () => {
    const showMessage = () => {
        /* eslint-disable no-alert */
        alert('Changed!');
    };

    return (
        <TextInputBEM
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
