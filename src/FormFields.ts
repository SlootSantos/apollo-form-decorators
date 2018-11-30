import { FirstComponent, SecondComponent } from "./firstComponent.tsx";

export const FormFields = {
  fieldOne: {
    name: "My first field",
    id: "fieldOne",
    active: true,
    RenderComp: FirstComponent,
    dependencies: {
      fields: []
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
  },
  fieldN: {
    name: "My second field",
    id: "fieldN",
    active: true,
    RenderComp: SecondComponent,
    dependencies: {
      fields: ["fieldThree"]
    }
  }
};
