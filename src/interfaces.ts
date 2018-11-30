export enum FormFieldKey {
  fieldOne,
  fieldTwo,
  fieldN
}

export interface FormField {
  id: string;
  name?: string;
  dependencies: FieldDependency;
}

export interface FieldDependency {
  fields: FormField[];
}

export interface FormComponent {
  fieldsToRender: FormFieldKey[];
  activeFields: FormFieldKey[];
}
