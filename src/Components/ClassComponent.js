import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p>
        My modal is {this.props.modal}. I am a {this.props.color} color Car
      </p>
    );
  }
}

export default ClassComponent;
