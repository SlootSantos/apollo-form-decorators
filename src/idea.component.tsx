import * as React from "react";

const globalFakeState = {
  sample: {
    active: false
  }
};

class SampleComponent extends React.Component {
  setActiveInFakeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      globalFakeState.sample.active = true;
    } else {
      globalFakeState.sample.active = false;
    }
  };
  render() {
    return <input type="text" onChange={this.setActiveInFakeState} />;
  }
}

export default class ViewXY extends React.Component {
  render() {
    return null;
  }
}
