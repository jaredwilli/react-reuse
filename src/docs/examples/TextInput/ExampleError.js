import React from 'react';
import TextInput from 'react-reuse/TextInput';

/** Required TextBox with Error */
const ExampleError = () => {
    return (
        <TextInput
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
