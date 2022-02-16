import React from "react";
import QuestionAnswer from "./QuestionAnswer";
import Questions from "./Data";

function App() {
  return (
    <div className="container">
      <h2>Common Qustions About Our Page.</h2>
      {Questions.map((question) => {
        return(
          <QuestionAnswer key={question.id} {...question}/>
        );
     }
     )}
    </div>
  );
}

export default App;
