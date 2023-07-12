import { useState, useEffect } from "react";
import QuestionList from "./QuestionList";

const Home = () => {
  const [questions, setQuestions] = useState(null);

  const [filter, setFilter] = useState(false);
  const [pending, setPending] = useState(true);

  const handleDifficultyFilter = (min, max) => {
    if (!filter) {
      const newQuestions = questions.filter(
        (question) => question.difficulty > min && question.difficulty < max
      );
      setQuestions(newQuestions);
      setFilter(true);
    } else {
      setQuestions(questions);
      setFilter(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/questions")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setQuestions(data);
          setPending(false);
        });
    }, 1000);
  });

  return (
    <div className="home">
      <div className="button-menu">
        <button
          className="button-easy"
          onClick={() => {
            handleDifficultyFilter(0, 33);
          }}
        >
          EASY
        </button>
        <button
          className="button-medium"
          onClick={() => {
            handleDifficultyFilter(33, 66);
          }}
        >
          MEDIUM
        </button>
        <button
          className="button-hard"
          onClick={() => {
            handleDifficultyFilter(66, 100);
          }}
        >
          HARD
        </button>
      </div>
      {pending && <span>loading...</span>}
      {questions && <QuestionList questions={questions} />}
    </div>
  );
};

export default Home;
