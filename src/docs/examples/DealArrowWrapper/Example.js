import React from 'react';
import DealArrowWrapper from 'react-reuse/DealArrowWrapper';

/** DealArrowWrapper example */

function Example() {
    return (
        <div>
            <h3>Example 1 - basic arrows</h3>
            <DealArrowWrapper rating="great" />

            <DealArrowWrapper rating="good" />

            <DealArrowWrapper rating="fair" />

            <DealArrowWrapper rating="high" />

            <DealArrowWrapper rating="overpriced" />

            <DealArrowWrapper rating="no-price" />

            <DealArrowWrapper rating="uncertain" />
            <br />
            <br />
            <h3>Example 2 - small arrows</h3>
            <DealArrowWrapper
                rating="great"
                arrowClassName="arrow-small"
            />
            <DealArrowWrapper
                rating="good"
                arrowClassName="arrow-small"
            />

            <DealArrowWrapper
                rating="fair"
                arrowClassName="arrow-small"
            />

            <DealArrowWrapper
                rating="high"
                arrowClassName="arrow-small"
            />

            <DealArrowWrapper
                rating="overpriced"
                arrowClassName="arrow-small"
            />

            <DealArrowWrapper
                rating="no-price"
                arrowClassName="arrow-small"
            />

            <DealArrowWrapper
                rating="uncertain"
                arrowClassName="arrow-small"
            />
            <br />
            <br />
            <h3>Example 3 - with label and info text</h3>
            <DealArrowWrapper
                rating="great"
                label="Great Deal"
                info="$4,245 below"
            />
            <br />
            <br />
            <DealArrowWrapper
                rating="good"
                label="Good Deal"
                info="$4,245 below"
            />
            <br />
            <br />
            <DealArrowWrapper
                rating="fair"
                label="Fair Deal"
                info="$4,245 below"
            />
            <br />
            <br />
            <DealArrowWrapper
                rating="high"
                label="High Price"
                info="$4,245 below"
            />
            <br />
            <br />
            <DealArrowWrapper
                rating="overpriced"
                label="Overpriced"
                info="$4,245 below"
            />
            <br />
            <br />
            <DealArrowWrapper
                rating="no-price"
                label="No price analysis"
                info="$4,245 below"
            />
            <br />
            <br />
            <DealArrowWrapper
                rating="uncertain"
                label="Uncertain"
                info="$4,245 below"
            />
        </div>
    );
}

export default Example;
