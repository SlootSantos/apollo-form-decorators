import * as React from "react";
import { render } from "react-dom";
import { FormFields } from "./FormFields";
import { filterRenderables } from "./decorator";
import { FormComponent, FormFieldKey } from "./interfaces";

@filterRenderables // maaaaagic
class AnyView extends React.Component<FormComponent> {
  static fieldsToRender: FormFieldKey[] = ["fieldOne", "fieldTwo"];
  static activeFields: FormFieldKey[]; // will be added implicitly by decorator

  renderMyFields = (): JSX.Element[] =>
    this.activeFields.map((fieldId: FormFieldKey) => {
      const { name, RenderComp } = FormFields[fieldId];

      return <RenderComp key={fieldId} name={name} />;
    });

  render() {
    return <div>{this.renderMyFields()}</div>;
  }
}

const App = (): JSX.Element => (
  <div>
    <AnyView />
  </div>
);

render(<App />, document.getElementById("root"));
