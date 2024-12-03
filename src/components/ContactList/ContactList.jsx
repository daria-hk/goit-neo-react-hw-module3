import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({
  totalFeedback,
  updateFeedback,
  handleResetFeedback,
}) => {
  return (
    <div className={css.options}>
      <Contact onClick={() => updateFeedback("good")}>Good</Contact>
      <Contact onClick={() => updateFeedback("neutral")}>Neutral</Contact>
      <Contact onClick={() => updateFeedback("bad")}>Bad</Contact>
      {totalFeedback > 0 ? (
        <Contact onClick={handleResetFeedback}>Reset</Contact>
      ) : null}
    </div>
  );
};

export default ContactList;
