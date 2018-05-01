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
        if (this.props.rating) { return; } // disable

        this.setState({
            tempRating: rating,
            rating
        });
    };

    onMouseOver = rating => {
        if (this.props.rating) { return; } // disable

        this.setState({
            tempRating: this.state.rating,
            rating
        });
    };

    onMouseOut = () => {
        if (this.props.rating) { return; } // disable

        this.setState({
            rating: this.state.tempRating
        });
    };

    render = () => {
        const fill = '#29292A';
        const stars = [];

        for (let i = 1; i <= this.props.scale; i++) {
            const isHalf = this.state.rating % 1 > 0;
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
                    style={(!this.props.rating) ? { cursor: 'pointer' } : {}}
                    onClick={() => this.onClick(i)}
                    onMouseOver={() => this.onMouseOver(i)}
                    onMouseOut={() => this.onMouseOut()}
                >

                    <StarIcon fillType={fillType} fill={fill} size={this.props.size} />
                </a>
            );
        }

        return (
            <div className="reviews-rating">
                <span className="star-rating">
                    {stars}
                </span>

                {this.props.showAverage && <span className="star-average">{this.props.rating}</span>}
                {this.props.totalRatings && <span className="star-total">{this.props.totalRatings} reviews</span>}
            </div>
        );
    };
}

Rating.propTypes = {
    /** Show the average rating value or not */
    showAverage: PropTypes.bool,

    /** The total number of reviews that have included a rating */
    totalRatings: PropTypes.number,

    /** The size of the stars in the rating component */
    size: PropTypes.number,

    /** The rating scale number for how many stars */
    scale: PropTypes.number,

    /** The rating value to set initially if needed */
    rating: PropTypes.number
};

Rating.defaultProps = {
    totalRatings: null,
    rating: null,
    size: 32,
    scale: 5
};

export default Rating;
