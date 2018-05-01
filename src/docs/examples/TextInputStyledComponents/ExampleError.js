import React from 'react';
import TextInputStyledComponents from 'react-reuse/TextInputStyledComponents';

/** Required TextBox with Error */
const ExampleError = () => {
    const showMessage = () => {
        /* eslint-disable no-alert */
        alert('Changed!');
    };

    return (
        <TextInputStyledComponents
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
