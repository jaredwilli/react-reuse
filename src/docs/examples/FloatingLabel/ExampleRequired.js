import React from 'react';
import FloatingLabel from 'react-reuse/FloatingLabel';

/** Required example */
function ExampleRequired() {
    return (
        <FloatingLabel
            type="text"
            id="name"
            placeholder="Name"
            errorMsg="Full name can contain only the alphabets and space"
            pattern={/^[a-z\s]+$/i}
            required
        />
    );
}

export default ExampleRequired;
