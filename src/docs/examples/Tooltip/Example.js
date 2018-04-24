import React from 'react';
import Tooltip from 'react-reuse/Tooltip';

/**
 * Example of a Tooltip component with content
 * */

function Example() {
    return (
        <div>
            <Tooltip label="M.Gemi Fit Expert">
                Our fit experts try on and wear test every shoe we release. They are committed to providing feedback on fit, comfort and quality. Have a question? We can help you find the right style and fit for your specific needs.

                <a href="#" className="chat-link">Chat with a Fit Expert</a>
            </Tooltip>


        </div>
    );
};

export default Example;
