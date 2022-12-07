import { Form } from "../components/Form";
import "../views/new-record.scss";
import { useState } from "react";

function NewRecord() {
  const [records, setRecords] = useState();
  const handleSubmit = (values) => {
    setRecords(values);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} />
      {JSON.stringify(records)}
    </div>
  );
}

export { NewRecord };
