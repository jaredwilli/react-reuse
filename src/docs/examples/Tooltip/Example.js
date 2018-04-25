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

            <Tooltip label="M.Gemi Fit Expert" click={true}>
                Our fit experts try on and wear test every shoe we release. They are committed to providing feedback on fit, comfort and quality. Have a question? We can help you find the right style and fit for your specific needs.
                <a className="chat-link" style={{ display: 'block', color: '#fff', textDecoration: 'underline', textTransform: 'uppercase', marginTop: '20px' }}>
                    Chat with a Fit Expert
                </a>
            </Tooltip>
        </div>
    );
};

export default Example;
