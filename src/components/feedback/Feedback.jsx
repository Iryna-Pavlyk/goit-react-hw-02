import css from "./Feedback.module.css";

const Feedback = ({
  reviews: { good, neutral, bad },
  totalFeedback,
  persentReviews,
}) => {
  return (
    <div className={css.container}>
      <p className={css.text}>Good: {good}</p>
      <p className={css.text}>Neutral: {neutral}</p>
      <p className={css.text}>Bad: {bad}</p>
      <p className={css.text}>Total: {totalFeedback}</p>
      <p className={css.text}>Positive: {persentReviews}%</p>
    </div>
  );
};

export default Feedback;
