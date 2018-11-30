import { FirstComponent, SecondComponent } from "./firstComponent.tsx";

export const FormFields = {
  debtors: { primary: { name: "fieldN" } },
  fieldOne: {
    name: "My first field",
    id: "fieldOne",
    active: true,
    RenderComp: FirstComponent,
    dependencies: {
      fields: ["fieldN"]
    }
  },
  fieldTwo: {
    name: "My second field",
    id: "fieldOne",
    active: false,
    RenderComp: SecondComponent,
    dependencies: {
      fields: ["debtors.primary.name"]
    }
  },
  fieldN: {
    name: "My second field",
    id: "fieldN",
    active: true,
    RenderComp: SecondComponent,
    dependencies: {
      fields: []
    }
  }
};

// TEST TEST
// we could destructre the dependencies from "dot notation"
// and get the corresponding data
// SAMPLE split!
// join this with the recursive decorator
const n = FormFields.fieldTwo.dependencies.fields[0]
  .split(".")
  .reduce((acc, name) => acc[name], FormFields);

console.log(n);
