import { Formik, Form, Field } from "formik";
import css from "./ContactForm.module.css";

//        <label htmlFor={nameFieldId}>Name</label>
//         <label htmlFor={phoneNumberId}>Number</label>

const ContactForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={css.form}>
        <label>Name</label>
        <Field className={css.field} type="text" name="username" />

        <label>Number</label>
        <Field
          className={css.field}
          type="tel"
          name="phoneNumber"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
