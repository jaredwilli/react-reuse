import React from 'react';
import TextInputBEM from 'react-reuse/TextInputBEM';

/** Required TextBox with Error */
const ExampleError = () => {
    return (
        <TextInputBEM
            htmlId="example-error"
            label="First Name"
            name="firstname"
            onChange={() => alert('Changed!')}
            error="First name is required"
            required
        />
    );
};

export default ExampleError;
