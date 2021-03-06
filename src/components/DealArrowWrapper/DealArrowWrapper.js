import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import DealArrow from '../DealArrow/DealArrow';
import './DealArrowWrapper.css';

/** A wrapper around the deal arrow icons for styling and label/info output */
const DealArrowWrapper = (props) => {
    return (
        <div className="deal">
            {props.rating &&
                <div className={classnames('deal-rating', `${props.rating}`, `${props.className}`)}>
                    <DealArrow className={props.arrowClassName} />
                </div>
            }
            {(props.label || props.differential) &&
                <div className="deal-meta">
                    {props.label &&
                        <h6>{props.label}</h6>
                    }
                    {props.differential &&
                        <div className="deal-differential">
                            <p>{props.differential}</p>
                        </div>
                    }
                </div>
            }
            {props.info &&
                <div className="deal-info">
                    <p>{props.info}</p>
                </div>
            }
        </div>
    );
};

DealArrowWrapper.defaultProps = {
    className: '',
    label: '',
    differential: '',
    info: ''
};

DealArrowWrapper.propTypes = {
    /** The rating - great, good, fair, high, overpriced, outlier, overpriced */
    rating: PropTypes.string.isRequired,
    /** Any additional class name to add to the div */
    className: PropTypes.string,
    /** For small arrows provide the `arrow-small` class */
    arrowClassName: PropTypes.string,
    /** The label for the deal arrow - Great, Good, Fair etc. */
    label: PropTypes.string,
    /** The differential text for the deal arrow */
    differential: PropTypes.string,
    /** The deal rating info text to display */
    info: PropTypes.string
};

export default DealArrowWrapper;
