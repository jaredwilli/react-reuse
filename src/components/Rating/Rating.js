import React from 'react';
import PropTypes from 'prop-types';
import styles from './Rating.css';

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

  rate = rating => {
    this.setState({
      rating: rating,
      tempRating: rating
    });
  }

  starOver = rating => {
    this.state.tempRating = this.state.rating;
    this.state.rating = rating;

    this.setState({
      rating: this.state.rating,
      tempRating: this.state.tempRating
    });
  }

  starOut = () => {
    this.state.rating = this.state.tempRating;
    this.setState({
        rating: this.state.rating
    });
  }

  render = () => {
      let stars = [];

      for (let i = 0; i < 5; i++) {
          let className = 'star';

          if (this.state.rating >= i && this.state.rating !== null) {
              className += ' is-selected';
            }

            stars.push(
                <label
                    className={className}
                    onClick={() => this.rate(i)}
                    onMouseOver={() => this.starOver(i)}
                    onMouseOut={() => this.starOut()}>
                    ★
                </label>
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
    /** Disable star rating component */
    disabled: PropTypes.bool
}

export default Rating;
