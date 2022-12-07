import { Button } from "./Button";
import { Form as FinalForm, Field } from "react-final-form";

const Form = ({ onSubmit = () => {} }) => {
  return (
    <FinalForm
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.spz) {
          errors.spz = "Required";
        }
        if (!values.date) {
          errors.date = "Required";
        }
        if (!values.kilometers) {
          errors.kilometers = "Required";
        }
        if (!values.service) {
          errors.service = "Required";
        }

        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="spz">
            {({ input, meta }) => (
              <div>
                <label>SPZ</label>
                <input
                  {...input}
                  maxLength="7"
                  type="text"
                  placeholder="Enter Licence Number"
                  style={{ textTransform: "uppercase" }}
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="date">
            {({ input, meta }) => (
              <div>
                <label>Date</label>
                <input {...input} type="date" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="kilometers">
            {({ input, meta }) => (
              <div>
                <label>Kilometers</label>
                <input
                  {...input}
                  type="number"
                  placeholder="Enter Kilometers"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="service">
            {({ input, meta }) => (
              <div>
                <label>Service</label>
                <input {...input} type="text" placeholder="Enter Service" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Button text="Enter" type="submit" />
        </form>
      )}
    />
  );
};

export { Form };
