import React from 'react';
import Textarea from 'react-reuse/Textarea';

/** Textarea */
const Example = () => {
    const showMessage = () => {
        /* eslint-disable no-alert */
        alert('Changed!');
    };

    return (
        <div>
            <Textarea
                htmlId="default-textarea"
                name="description"
                label="Default Textarea - With Label"
                placeholder="Some placeholder text"
                onChange={() => showMessage()}
                cols={50}
                rows={10}
            />
            <br />
            <br />

            <Textarea
                htmlId="question-textarea"
                name="question"
                placeholder="Type your question here"
                onChange={() => showMessage()}
                width={'60%'}
                height={'150px'}
            />
            <br />
            <br />

            <Textarea
                htmlId="resize-textarea"
                name="description"
                label="With resize control and no width/height"
                placeholder="Some placeholder text"
                value="This is some existing value"
                onChange={() => showMessage()}
                resize="both"
            />
            <br />
            <br />

            <Textarea
                htmlId="cols-rows-textarea"
                name="description"
                label="With cols and rows attributes"
                placeholder="Some placeholder text"
                onChange={() => showMessage()}
                cols={50}
                rows={10}
                resize="vertical"
            />
            <br />
            <br />

            <Textarea
                htmlId="cols-rows-textarea"
                name="description"
                label="With cols and rows attributes"
                placeholder="Some placeholder text"
                onChange={() => showMessage()}
                error="This is an error message"
                cols={50}
                rows={10}
                resize="vertical"
            />
            <br />
            <br />

        </div>
    );
};

export default Example;
