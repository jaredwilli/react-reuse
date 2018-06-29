import React from 'react';
import FloatingLabel from 'react-reuse/FloatingLabel';

/** Default example */
function ExampleOptional() {
    return (
        <div>
            <FloatingLabel
                type="text"
                id="name"
                placeholder="First Name"
                errorMsg="Full name can contain letters and space"
                pattern={/^[a-z\s]+$/i}
            />
            <br />
            <br />

            <FloatingLabel
                type="text"
                id="name"
                placeholder="First Name"
                errorMsg="Full name can contain letters and space"
                pattern={/^[a-z\s]+$/i}
                width={'60%'}
            />
            <br />
            <br />

            <FloatingLabel
                type="email"
                id="email"
                placeholder="Email Address"
                width={'60%'}
            />
            <br />
            <br />

            <FloatingLabel
                type="textarea"
                id="text"
                placeholder="Description"
                width={'60%'}
                height={'150px'}
            />
        </div>
    );
}

export default ExampleOptional;
