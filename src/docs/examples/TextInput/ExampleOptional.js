import React from 'react';
import TextInput from 'react-reuse/TextInput';

/** Optional TextBox */
const ExampleOptional = () => {
    const showMessage = () => {
        /* eslint-disable no-alert */
        alert('Changed!');
    };

    return (
        <TextInput
            htmlId="example-optional"
            label="First Name"
            name="firstname"
            onChange={() => showMessage()}
        />
    );
};

export default ExampleOptional;
