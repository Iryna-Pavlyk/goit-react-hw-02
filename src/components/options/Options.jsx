import css from "./Options.module.css";

const Options = ({ reviews }) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={reviews}>
        Good
      </button>
      <button className={css.button} onClick={reviews}>
        Neutral
      </button>
      <button className={css.button} onClick={reviews}>
        Bad
      </button>
      <button className={css.button} onClick={reviews}>
        Reset
      </button>
    </div>
  );
};

export default Options;
