import React from 'react';
import TextInputStyledComponents from 'react-reuse/TextInputStyledComponents';

/** Required TextBox with Error */
class ExampleError extends React.Component {
    render() {
        return (
            <TextInputStyledComponents
                htmlId="example-error"
                label="First Name"
                name="firstname"
                onChange={() => alert('Changed!')}
                error="First name is required"
                required
            />
        );
    }
};

export default ExampleError;
