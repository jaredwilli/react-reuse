import React from 'react';
import TextInput from 'react-reuse/TextInput';

/** Required TextBox with Error */
const ExampleError = () => {
    const showMessage = () => {
        /* eslint-disable no-alert */
        alert('Changed!');
    };

    return (
        <TextInput
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
