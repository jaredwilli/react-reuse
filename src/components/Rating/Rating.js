import React from 'react';
import PropTypes from 'prop-types';

import StarIcon from '../StarIcon';

import './Rating.css';

/** Star Rating component that sets the selection on click and has hover animation */
class Rating extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: this.props.rating || null,
            tempRating: null
        };
    }

    onClick = rating => {
        this.setState({
            rating: rating,
            tempRating: rating
        });
    };

    onMouseOver = rating => {
        this.setState({
            rating: rating,
            tempRating: this.state.rating
        });
    };

    onMouseOut = () => {
        this.setState({
            rating: this.state.tempRating
        });
    };

    render = () => {
        const fill = '#29292A';
        let stars = [];

        for (let i = 1; i <= this.props.scale; i++) {
            let isHalf = this.state.rating % 1 > 0;
            let fillType = 'transparent';

            if (this.state.rating !== null) {
                if (this.state.rating >= i) {
                    fillType = 'full';
                } else if (isHalf && Math.ceil(this.state.rating) === i) {
                    fillType = 'half';
                }
            }

            stars.push(
                <a
                    key={i}
                    className="star-link"
                    onClick={() => this.onClick(i)}
                    onMouseOver={() => this.onMouseOver(i)}
                    onMouseOut={() => this.onMouseOut()}>
                    <StarIcon fillType={fillType} fill={fill} />
                </a>
            );
        }

        return <div className="star-rating">{stars}</div>;
    };
}

Rating.propTypes = {
    /** The rating scale number for how many stars */
    scale: PropTypes.number,

    /** The rating value to set initially if needed */
    rating: PropTypes.number
};

Rating.defaultProps = {
    scale: 5,
    rating: null
};

export default Rating;
