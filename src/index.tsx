import * as React from "react";
import * as R from "ramda";
import { render } from "react-dom";
import { FormFields } from "./FormFields";
import { filterRenderables, decorateRender } from "./decorator";
import { FormComponent, FormFieldKey } from "./interfaces";
import SampleComponent from "./idea.component.tsx";

class PseudoFieldN extends React.Component {
  setActiveInFakeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      FormFields.fieldN.active = true;
    } else {
      FormFields.fieldN.active = false;
    }
  };
  render() {
    return (
      <input
        type="text"
        onChange={this.setActiveInFakeState}
        placeholder="fieldN"
      />
    );
  }
}

//@filterRenderables // maaaaagic
class AnyView extends React.Component<FormComponent> {
  fieldsToRender: FormFieldKey[] = ["fieldOne", "fieldTwo"];
  activeFields: FormFieldKey[]; // will be added implicitly by decorator

  constructor(props) {
    super(props);
    // I rerender every 5 seconds.. because i'm to stupid to set up observerables
    setInterval(() => this.setState({}), 100);
  }

  renderMyFields = (): JSX.Element[] => {
    return this.activeFields.map((fieldId: FormFieldKey) => {
      const { name, RenderComp } = FormFields[fieldId];

      return <RenderComp key={fieldId} name={name} />;
    });
  };
  @decorateRender
  render() {
    return <div>{this.renderMyFields()}</div>;
  }
}

const App = (): JSX.Element => (
  <div>
    <PseudoFieldN />
    <AnyView />
  </div>
);

render(<App />, document.getElementById("root"));
