import React from 'react';
import QuestionMark from 'react-reuse/QuestionMark';

/** Some examples of setting the props for customizing the colors for each stars state.  */

function Example() {
    return (
        <div>
            <QuestionMark />
            <br />
            <br />
            <QuestionMark size={30} />
            <QuestionMark stroke="#980909" />
            <QuestionMark stroke="magenta" />
        </div>
    );
};

export default Example;
