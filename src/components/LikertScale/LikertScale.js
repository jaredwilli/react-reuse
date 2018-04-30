import React from 'react';
import PropTypes from 'prop-types';

import './LikertScale.css';

const LikertScale = props => {
    const valueIndex = props.options.indexOf(props.value.label[0]);
    const valueArr = new Array(props.options.length);

    const labelArrs = {
        size: [
            'Runs Small',
            'True to Size',
            'Runs Large'
        ],
        width: [
            'Runs Narrow',
            'True to Width',
            'Runs Wide'
        ]
    };

    for (let i = 0; i < valueArr.length; i++) {
        if (i === 0) {
            valueArr[i] = 0;
        } else if (i === valueArr.length) {
            valueArr[i] = 100;
        } else {
            valueArr[i] = 100 / (valueArr.length - 1) * i;
        }
    }

    // Calculate the left position for the big black dot
    const dotStyle = {
        left: `${valueArr[valueIndex] - 2.5}%`
    };

    return (
        <div className="likert-scale" style={{ width: props.width }}>
            <div className="label">{props.value.label}</div>

            <div className="dot-points">
                {valueArr.map((val, index) => {
                    const label = labelArrs[props.value.dimensionLabel.toLowerCase()];

                    return (
                        <div key={index} className="small-dot" style={{ left: `${val}%` }}>
                            {([0,2,4].indexOf(index) !== -1) &&
                                <span>
                                    {label[[0,2,4].indexOf(index)]}
                                </span>
                            }
                        </div>
                    );
                })}
            </div>

            <div className="dot" style={dotStyle}></div>
            <div className="line" style={{ width: props.width }}></div>
        </div>
    );
};

LikertScale.propTypes = {
    /** The value of the chart where the dot should display */
    value: PropTypes.object.isRequired,

    /** The list of scale options for setting the values of the dot points */
    options: PropTypes.array.isRequired,

    /** The list of scale options for setting the values of the dot points */
    width: PropTypes.string
};

LikertScale.defaultProps = {
    width: '100%'
};

export default LikertScale;
