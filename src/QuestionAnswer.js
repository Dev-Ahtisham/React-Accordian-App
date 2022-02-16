import React, { useState } from "react";

import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import "./index.css";

const QuestionAnswer = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="questionsContainer">
      <div className="singleQuestion">
        <header>
          <h3>{title}</h3>
          <button onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <AiFillMinusSquare /> : <AiFillPlusSquare />}
          </button>
        </header>
        {showInfo && <p>{info}</p>}
      </div>
    </div>
  );
};

export default QuestionAnswer;
