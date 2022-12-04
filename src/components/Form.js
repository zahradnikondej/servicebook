import { Form as FinalForm } from "react-final-form";

function Form({ onSubmit, validate, render }) {
  return <FinalForm onSubmit={onSubmit} validate={validate} render={render} />;
}
