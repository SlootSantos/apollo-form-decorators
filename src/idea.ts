// 1) Define interfaces for fields
// 2) Predefine field schema
// 3) Add fixed field dependencies

// 1 => INTERFACES
interface ITraversal {
  debtors: IDebtors;
}

interface IDebtors {
  primary: IDebtor;
  secondary?: IDebtor;
}

interface IDebtor {
  personal: IPersonalData & IFormFieldSet;
  contact?: IContactData & IFormFieldSet;
}

interface IPersonalData {
  firstname: IFormField;
  lastname: IFormField;
}

interface IContactData {
  phone: IFormField;
  email: IFormField;
}

interface IFormField {
  type: EFieldType;
  id: EFormFieldKey;
  dependencies: EFormFieldKey[]; // how to do nested fields?
}

interface IFormFieldSet {
  id: string;
  dependencies: EFormFieldKey[];
}

enum EFieldType {
  textField,
  selectField,
  dateField
}

enum EFormFieldKey {
  firstname,
  lastname,
  street,
  xyFieldSet
}

interface IBaseComponent {
  fieldsToRender: EFormFieldKey[];
}

// 2 && 3 => FIELDS analog to interface + dependencies
const traversal: ITraversal = {
  debtors: {
    primary: {
      personal: {
        id: "personalData blaabla",
        dependencies: [EFormFieldKey.xyFieldSet],
        // should be deeper nested?
        firstname: {
          type: EFieldType.textField,
          id: EFormFieldKey.firstname,
          dependencies: [EFormFieldKey.lastname]
        },
        lastname: {
          type: EFieldType.textField,
          id: EFormFieldKey.lastname,
          dependencies: [EFormFieldKey.street]
        }
      }
    }
  }
};

// @injectActiveFieldsToRender
class PersonalComponent implements IBaseComponent {
  fieldsToRender: EFormFieldKey[] = [];

  constructor() {
    const { firstname, lastname } = traversal.debtors.primary.personal;
    this.fieldsToRender = [firstname.id, lastname.id];
  }

  render() {
    //return <>{this.props.renderActiveFields()}</>
  }
}

class ViewXY {
  render() {
    // make use of base components
    // <PersonalComponent />
  }
}


///////////////////////////////////////////
// Curry recursive depdency checker

const checkActiveDependencies = (config: any) => (fieldId: any): boolean {
  const { active, dependencies } = FormFields[fieldId];
  // bla bla check config

  return active && dependencies.fields.every(checkActiveDependencies(config));
}
const isRentner = () => 'FormFieldKey.beruf' === 'STATIC.RENTNER'
const exampleConfig = [isRentner]

const partial: any = checkActiveDependencies(exampleConfig)
const v = [1].filter(partial)