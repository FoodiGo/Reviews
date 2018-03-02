import React from 'react';
import propTypes from 'proptypes';
import helpers from '../ajaxHelpers/ajaxHelpers';

const buttonIcon = {
  Useful: '',
  Funny: '',
  Cool: '',
};

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: this.props.type,
      score: this.props.score,
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const route = `/restaurants/${this.props.restaurant}/reviews/${this.props.id}`;
    const { type, score } = this.state;
    const request = {};
    request[type.toLowerCase()] = score;

    if (this.state.clicked) {
      request[type.toLowerCase()] = score - 1;
      helpers.put(route, request);

      this.setState({
        clicked: false,
        score: score - 1,
      });
    } else {
      request[type.toLowerCase()] = score + 1;
      helpers.put(route, request);

      this.setState({
        clicked: true,
        score: score + 1,
      });
    }
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        <span className="buttonImage">{buttonIcon[this.props.type]}</span>
        <span className="buttonType"> {this.state.type}</span>
        <span>{this.state.score > 0 ? ` ${this.state.score}` : ''}</span>
      </button>
    );
  }
}

Button.propTypes = {
  id: propTypes.string.isRequired,
  restaurant: propTypes.number.isRequired,
  score: propTypes.number.isRequired,
  type: propTypes.string.isRequired,
};

export default Button;
