# Apollo FE
## The complicated Parts
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
