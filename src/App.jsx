import { useState } from "react";
import "./App.css";
import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";

const App = () => {
  const [reviews] = useState({ good: 0, neutral: 0, bad: 0 });
  //   const updateFeedback = (feedbackType) => {
  //     setReviews({ ...rewievs, good: rewievs.good + 1 });
  //   };
  return (
    <>
      <Description />
      <Options reviews={reviews} />
      <Feedback reviews={reviews} />
    </>
  );
};

export default App;
