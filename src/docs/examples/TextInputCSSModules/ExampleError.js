import React from 'react';
import TextInputCSSModules from 'react-reuse/TextInputCSSModules';

/** Required TextBox with Error */
const ExampleError = () => {
    return (
        <TextInputCSSModules
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
