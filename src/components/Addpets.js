import { Field, Form, Formik } from "formik";
import React from "react";
import { addPet } from "../API";

const Addpets = () => {
  function submit(x) {
    addPet(x);
  }
  return (
    <>
      <div className="container">
        <Formik
          initialValues={{ name: "", type: "", image: "", adopted: 0 }}
          onSubmit={submit}
        >
          <Form>
            <Field as="input" name="name" type="text"></Field>
            <Field as="input" name="type" type="text"></Field>
            <Field as="input" name="image" type="text"></Field>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Addpets;
