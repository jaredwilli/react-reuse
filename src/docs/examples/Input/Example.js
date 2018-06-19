import React from 'react';
import Input from 'react-reuse/Input';

/** Input example */

function Example() {
    const showMessage = () => {
        /* eslint-disable no-alert */
        alert('Changed!');
    };

    return (
        <div>
            <Input
                htmlId="default-Input"
                name="default-Input"
                label="Input Field"
                onChange={() => showMessage()}
                placeholder="Some placeholder text"
            />
            <br />
            <br />

            <Input
                htmlId="name-Input"
                name="name-Input"
                onChange={() => showMessage()}
                placeholder="Name"
                width={'60%'}
            />
            <br />
            <br />

            <Input
                htmlId="email-Input"
                name="email-Input"
                onChange={() => showMessage()}
                placeholder="Email"
                width={'60%'}
            />
            <br />
            <br />

        </div>
    );
}

export default Example;
