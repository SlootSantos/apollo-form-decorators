import * as React from "react";
import { render } from "react-dom";
import { FormFields } from "./FormFields";
import { filterRenderables } from "./decorator";
import { FormComponent, FormFieldKey } from "./interfaces";

@filterRenderables
class AnyView extends React.Component<FormComponent> {
  static fieldsToRender = ["fieldOne", "fieldTwo"];

  renderMyFields = (): JSX.Element[] =>
    this.activeFields.map((fieldId: FormFieldKey) => {
      const { name, RenderComp } = FormFields[fieldId];

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
