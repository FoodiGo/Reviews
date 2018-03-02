import React from 'react';
import propTypes from 'proptypes';

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
  }

  render() {
    return (
      <button>
        <span className="buttonImage">{buttonIcon[this.props.type]}</span>
        <span className="buttonType"> {this.state.type}</span>
        <span>{this.state.score > 0 ? ` ${this.state.score}` : ''}</span>
      </button>
    );
  }
}

Button.propTypes = {
  id: propTypes.string,
  restaurant: propTypes.number,
  score: propTypes.number,
  type: propTypes.string,
}.isRequired;

export default Button;
