import { Field } from "../components/Field";
import { Button } from "./Button";

const Form = () => {
  return (
    <form>
      <Field
        placeholder="SPZ"
        maxLenght="7"
        style={{ textTransform: "uppercase" }}
      />
      <Field placeholder="DATE" type="date" />
      <Field placeholder="Kilometers" type="number" />
      <Field placeholder="Repair" />
      <Button />
    </form>
  );
};

export { Form };
