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

export function decorateRender(target, x, y) {
  const orgFn = y.value;
  y.value = function() {
    this.activeFields = this.fieldsToRender.filter(checkActiveDependencies);
    return orgFn.call(this);
  };
  return y;
}
