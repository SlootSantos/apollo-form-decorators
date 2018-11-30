import { FormFields } from "./FormFields";
import { FormComponent, FormFieldKey } from "./interfaces";

function checkActiveDependencies(fieldId: FormFieldKey) {
  const { name, active, dependencies } = FormFields[fieldId];
  if (!active) return false;

  return active && dependencies.fields.every(checkActiveDependencies);
}

export function filterRenderables(BaseClass: FormComponent) {
  return class extends BaseClass {
    activeFields = BaseClass.fieldsToRender.filter(checkActiveDependencies);
  };
}
