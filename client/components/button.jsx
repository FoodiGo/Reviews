import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <button>
        <div>This will be the button image</div>
        <div>This will be the button name (either useful, funny or cool)</div>
      </button>
    );
  }
}

export default Button;
