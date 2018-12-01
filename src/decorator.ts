import { FormFields } from "./FormFields";
import { FormComponent, FormFieldKey } from "./interfaces";

// recursive magic!
// I'm not quite sure about O(n) yet... do we even care?
function checkActiveDependencies(fieldId: FormFieldKey): boolean {
  const { active, dependencies } = FormFields[fieldId];

  return active && dependencies.fields.every(checkActiveDependencies);
}

// decorator to to decide which field to render
// maybe we don't need to do this on statics if we decorate render fn
export function filterRenderables(BaseClass: FormComponent): FormComponent {
  return class extends BaseClass {
    activeFields = BaseClass.fieldsToRender.filter(checkActiveDependencies);
  };
}

// will this hit performance?
export function decorateRender(__, _, descriptor: any) {
  const originalRenderFn = descriptor.value;
  descriptor.value = function() {
    this.activeFields = this.fieldsToRender.filter(checkActiveDependencies);
    return originalRenderFn.call(this);
  };
  return descriptor;
}
