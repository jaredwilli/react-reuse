import React from 'react';
import TextInput from 'react-reuse/TextInput';

/** Optional TextBox */
class ExampleOptional extends React.Component {
    render() {
        return (
            <TextInput
                htmlId="example-optional"
                label="First Name"
                name="firstname"
                onChange={() => alert('Changed!')}
            />
        );
    }
};

export default ExampleOptional;
