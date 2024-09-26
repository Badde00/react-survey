import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [answers, setAnswers] = useState([]);

  function handleNewAnswer(newAnswer) {
    setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
  }

  return (
    <main className="survey">
      <section className={"survey__list"}>
        <h2>Answers list</h2>
        {/* answers should go here, ignore for now */}
        <AnswersList answersList={answers} />
      </section>
      <section className="survey__form">
        {
          <Form handleNewAnswer={handleNewAnswer} />
        }
      </section>
    </main>
  );
}

export default Survey;
