const Contact = ({ children, onClick }) => {
  const handleClick = (evt) => {
    onClick(evt);
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default Contact;
