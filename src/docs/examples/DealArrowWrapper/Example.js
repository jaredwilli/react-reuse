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
            <h3>Example 3 - with label and IMV text</h3>
            <DealArrowWrapper
                rating="great"
                label="Great Deal"
                imv="$4,245 below"
            />
            <br />
            <br />
            <DealArrowWrapper
                rating="good"
                label="Good Deal"
                imv="$4,245 below"
            />
            <br />
            <br />
            <DealArrowWrapper
                rating="fair"
                label="Fair Deal"
                imv="$4,245 below"
            />
            <br />
            <br />
            <DealArrowWrapper
                rating="high"
                label="High Price"
                imv="$4,245 below"
            />
            <br />
            <br />
            <DealArrowWrapper
                rating="overpriced"
                label="Overpriced"
                imv="$4,245 below"
            />
            <br />
            <br />
            <DealArrowWrapper
                rating="no-price"
                label="No price analysis"
                imv="$4,245 below"
            />
            <br />
            <br />
            <DealArrowWrapper
                rating="uncertain"
                label="Uncertain"
                imv="$4,245 below"
            />
            <br />
            <br />
            <div style={{ width: '620px' }}>
                <h3>Example 4 - with label and info text</h3>
                <DealArrowWrapper
                    rating="great"
                    label="Great Deal"
                    info="Mike, a first-time used car shopper, found a great deal on a SUV for his family"
                />
                <br />
                <br />
                <DealArrowWrapper
                    rating="good"
                    label="Good Deal"
                    info="Dave found a good deal on an SUV for him and his dogs"
                />
                <br />
                <br />
                <DealArrowWrapper
                    rating="fair"
                    label="Fair Deal"
                    info="Some other string of text for info example"
                />
            </div>
            <br />
            <br />

        </div>
    );
}

export default Example;
