import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={css.container}>
      <button
        className={css.button}
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        className={css.button}
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={css.button}
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback ? (
        <button className={css.button} onClick={resetFeedback}>
          Reset
        </button>
      ) : (
        // Що повертаємо?! (можливість далі клікати)
        <div></div>
      )}
    </div>
  );
};

export default Options;
