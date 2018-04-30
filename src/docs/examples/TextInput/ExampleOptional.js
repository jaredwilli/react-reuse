import React from 'react';
import TextInput from 'react-reuse/TextInput';

/** Optional TextBox */
const ExampleOptional = () => {
    return (
        <TextInput
            htmlId="example-optional"
            label="First Name"
            name="firstname"
            onChange={() => alert('Changed!')}
        />
    );
};

export default ExampleOptional;
