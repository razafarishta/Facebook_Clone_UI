import React, {Component} from 'react';
import StarRating from 'react-native-star-rating';

class GeneralStarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  render() {
    return (
      <StarRating
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={rating => this.onStarRatingPress(rating)}
        fullStarColor={'yellow'}
        emptyStarColor={'yellow'}
        style
      />
    );
  }
}

export default GeneralStarExample;
