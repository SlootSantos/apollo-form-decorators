import { FormFields } from "./FormFields";
import { FormComponent, FormFieldKey } from "./interfaces";

// recursive magic!
// I'm not quite sure about O(n) yet... do we even care?
function checkActiveDependencies(fieldId: FormFieldKey): boolean {
  const { active, dependencies } = FormFields[fieldId];

  return active && dependencies.fields.every(checkActiveDependencies);
}

// decorator to to decide which field to render
export function filterRenderables(BaseClass: FormComponent): FormComponent {
  return class extends BaseClass {
    activeFields = BaseClass.fieldsToRender.filter(checkActiveDependencies);
  };
}
