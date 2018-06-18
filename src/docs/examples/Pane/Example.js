import React from 'react';
import Pane from 'react-reuse/Pane';

/** Pane example */

function Example() {
    return (
        <div>
            <Pane label="Tab 1">
                <div>This is my tab 1 contents!</div>
            </Pane>
            <Pane label="Tab 2">
                <div>This is my tab 2 contents!</div>
            </Pane>
            <Pane label="Tab 3">
                <div>This is my tab 3 contents!</div>
            </Pane>
        </div>
    );
}

export default Example;
