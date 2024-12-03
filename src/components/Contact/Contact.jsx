import css from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const handleClick = (evt) => {
    onClick(evt);
  };

  return (
    <div className={css.contactContainer}>
      <div className={css.contact}>
        <p className={css.contactItem}>{name}</p>
        <p className={css.contactItem}>{number}</p>
      </div>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default Contact;
