import * as React from "react";

export class FirstComponent extends React.Component {
  render() {
    return <input {...this.props} type="text" placeholder={this.props.name} />;
  }
}

export class SecondComponent extends React.Component {
  render() {
    return <textarea {...this.props} placeholder={this.props.name} />;
  }
}
