import css from "./Description.module.css";

const Description = () => {
  const title = "Sip Happens Café";
  const text =
    "Please leave your feedback about our service by selecting one of the options below.";
  return (
    <div className={css.container}>
      <h1 className={css.title}>{title}</h1>
      <p className={css.text}>{text}</p>
    </div>
  );
};

export default Description;
