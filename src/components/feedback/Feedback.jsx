import css from "./Feedback.module.css";

const Feedback = ({ reviews }) => {
  return (
    <div className={css.container}>
      <p className={css.text}>Good:{reviews.good}</p>
      <p className={css.text}>Neutral:</p>
      <p className={css.text}>Bad:</p>
      <p className={css.text}>Total:</p>
      <p className={css.text}>Positive: %</p>
    </div>
  );
};

export default Feedback;
