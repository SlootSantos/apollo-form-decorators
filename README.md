# Apollo FE
## The complicated Parts
Ability to build a variety of different *dynamic* forms:
  - form with steps
  - form without distinguishable steps
  - ...
  

FormData in nested schema:

```
"personal": {
  "birthday": "string",
  "birthname": "string",
  "birthplace": "string",
  "civilStatus": "string",
  "firstname": "string",
  "gender": "string",
  "lastname": "string",
  "livingInGermanySince": "string",
  "nationality": "string"
},
"personId": "string",
"previousAddress": {
  "city": "string",
  "country": "string",
  "houseNumber": "string",
  "street": "string",
  "zipCode": "string"
},
"previousEmployment": {
  "employer": {
    "address": {
      "city": "string",
      "country": "string",
      "houseNumber": "string",
      "street": "string",
      "zipCode": "string"
    },
    "name": "string"
  },
}
```

Form Fields should know when to render themselves:
```
export interface FormField {
  id: string;
  name?: string;
  dependencies: FieldDependency;
}

export interface FieldDependency {
  fields: FormField[];
}
```

Hence Each field needs to figure out its active dependencies recursively
```
function checkActiveDependencies(fieldId: FormFieldKey): boolean {
  const { active, dependencies } = FormFields[fieldId];

  return active && dependencies.fields.every(checkActiveDependencies);
}
```
------------------------------------------------------------------------------

# Possible Steps to define a Form
1) Define Interfaces (what can be what)
2) Predefine Fields (those won't change) => [Apollo Schema](https://github.com/finanzcheck/catalyst-go-traversal/tree/master/schema)
3) These fileds from 2) will have fixed dependencies
  => <selfUsedProperty.size **if and only if** selfUsedProperty.type == oneOf X>
4) At runtime fields can observe dependencies **and** render themselves *(?)*














