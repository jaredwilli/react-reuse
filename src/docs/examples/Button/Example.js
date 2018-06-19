import React from 'react';
import Button from 'react-reuse/Button';

/** Button example */

function Example() {
    const showMessage = () => {
        /* eslint-disable no-alert */
        alert('Changed!');
    };

    return (
        <div>
            <Button
                htmlId="default-button"
                name="default-button"
                onClick={() => showMessage()}
            >
                Default
            </Button>
            <br />
            <br />

            <Button
                htmlId="default-button"
                name="default-button"
                onClick={() => showMessage()}
            >
                Sign In
            </Button>
            <br />
            <br />

            <Button
                htmlId="regular-button"
                name="regular-button"
                onClick={() => showMessage()}
            >
                Shop the Monday Drop
            </Button>
            <br />
            <br />

            <Button
                htmlId="block-button"
                name="block-button"
                onClick={() => showMessage()}
                classname="block"
            >
                Block Level Button
            </Button>
            <br />
            <br />

            <Button
                htmlId="disabled-button"
                name="disabled-button"
                onClick={() => showMessage()}
                disabled="true"
            >
                Disabled Button
            </Button>
            <br />
            <br />

            <Button
                htmlId="disabled-button"
                name="disabled-button"
                onClick={() => showMessage()}
                disabled="true"
                classname="block"
            >
                Disabled Block Level Button
            </Button>
            <br />
            <br />

            <Button
                htmlId="waitlist-button"
                name="waitlist-button"
                onClick={() => showMessage()}
                classname="waitlist"
            >
                Add to Waitlist
            </Button>
            <br />
            <br />

            <Button
                htmlId="waitlist-button"
                name="waitlist-button"
                onClick={() => showMessage()}
                classname="waitlist block"
            >
                Waitlist Block Level
            </Button>
            <br />
            <br />

        </div>
    );
}

export default Example;
