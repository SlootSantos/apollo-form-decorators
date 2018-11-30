import * as React from "react";

export class FirstComponent extends React.Component {
  render() {
    return <input type="text" placeholder={this.props.name} />;
  }
}

export class SecondComponent extends React.Component {
  render() {
    return <textarea placeholder={this.props.name} />;
  }
}
