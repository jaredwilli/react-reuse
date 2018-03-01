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
  }

  onMouseOver = rating => {
    this.setState({
        rating: rating,
        tempRating: this.state.rating
    });
  }

  onMouseOut = () => {
    this.setState({
        rating: this.state.tempRating
    });
  }

  render = () => {
      let stars = [];

      for (let i = 0; i < 5; i++) {
          let fillType = '';

          if (this.state.rating >= i && this.state.rating !== null) {
              fillType = 'full';
            }

            stars.push(
                <a key={i}
                    className="star-link"
                    onClick={() => this.onClick(i)}
                    onMouseOver={() => this.onMouseOver(i)}
                    onMouseOut={() => this.onMouseOut()}>
                    <StarIcon fillType={fillType} fill="#29292A" />
                </a>
            );
        }

        return (
            <div className="star-rating">
                {stars}
            </div>
        );
    }
}

Rating.propTypes = {
    /** The rating value to set initially if needed */
    rating: PropTypes.number,

    /** Disable star rating component */
    disabled: PropTypes.bool
}

export default Rating;
