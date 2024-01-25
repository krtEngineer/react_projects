import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <QuestionButton showInfo={showInfo} setShowInfo={setShowInfo} />
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

const QuestionButton = ({ showInfo, setShowInfo }) => {
  return (
    <button
      className="btn"
      onClick={() => {
        setShowInfo(!showInfo);
      }}
    >
      {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
    </button>
  );
};

export default Question;
