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

interface ITextfield {
  onChange: () => void;
  required?: boolean;
}

// TEST
// TEST
// TEST
// traversal interface
interface IDebtor {
  name: string;
  label: string;
  id: string; // NESTED?!
  contact?: IContact;
  address?: IAddress;
}

interface IContact {
  phone: string;
  email: string;
}

interface IAddress {
  zip: string;
  street: string;
  houseNo: string;
}

interface IDebtors {
  primary: IDebtor;
  secondary?: IDebtor;
}

interface ITraversal {
  debtors: IDebtors;
  common?: string;
  xy?: string;
}
