import * as React from "react";
import { render } from "react-dom";
import { FirstComponent, SecondComponent } from "./firstComponent.tsx";

const FormFields = {
  fieldOne: {
    name: "My first field",
    id: "fieldOne",
    active: true,
    RenderComp: FirstComponent,
    dependencies: {
      fields: ["fieldTwo"]
    }
  },
  fieldTwo: {
    name: "My second field",
    id: "fieldOne",
    active: false,
    RenderComp: SecondComponent,
    dependencies: {
      fields: ["fieldOne", "fieldN"]
    }
  }
};

class AnyView extends React.Component {
  renderMyFields = () =>
    Object.keys(FormFields)
      .filter(field => FormFields[field].active)
      .map(field => {
        const { name, RenderComp } = FormFields[field];

        return <RenderComp name={name} />;
      });

  render() {
    return <div>{this.renderMyFields()}</div>;
  }
}

const App = () => (
  <div>
    <AnyView />
  </div>
);

render(<App />, document.getElementById("root"));
