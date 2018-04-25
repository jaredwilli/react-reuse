import React from 'react';
import Tooltip from 'react-reuse/Tooltip';

/**
 * Example of a Tooltip component with content
 * */

function Example() {
    return (
        <div>
            <Tooltip label="Hover Tooltip">
                Here is a tooltip example that has no link on it and therefore no reason to hover the mouse over and can be just a hover activated tooltip.
            </Tooltip>

            <br />
            <br />

            <Tooltip label="Click Tooltip" click>
                Here is a tooltip that has a link in the content which means that it requires being about to move the mouse over it to click the link. So it has a 'click' attribute which means you must click to activate the tooltip.

                <a className="chat-link" style={{ display: 'block', color: '#fff', textDecoration: 'underline', textTransform: 'uppercase', marginTop: '20px' }}>
                    Click me to reveal the secrets!
                </a>
            </Tooltip>
        </div>
    );
};

export default Example;
