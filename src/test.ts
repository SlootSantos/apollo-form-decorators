import * as React from "react";

// blabla testing anything i had in mind
// if this where one specific fieldset
// e.g.: Personal Data

interface IRenderFields {
  id: string;
  renderProp: (prop: string) => JSX.Element;
}

const fieldsToRender: IRenderFields[] = [
  {
    id: "firstDebtorName",
    renderProp: () => '<input type="text" />'
  },
  {
    id: "firstDebtorEmail",
    renderProp: () => '<input type="email" />'
  },
  {
    id: "firstDebtorSecondName",
    renderProp: props => '<input placeholder={props.name} type="text" />'
  }
];
