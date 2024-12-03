import { Formik, Form, Field } from "formik";
import css from "./SearchBox.module.css";

//        <label htmlFor={nameFieldId}>Find contacts by name</label>

const SearchBox = ({ handleChange, value }) => {
  return (
    <Formik initialValues={value} onChange={handleChange}>
      <Form className={css.form}>
        <label>Find contacts by name</label>
        <Field className={css.field} type="text" name="username" />
      </Form>
    </Formik>
  );
};

export default SearchBox;
