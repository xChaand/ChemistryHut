const QuestionList = ({ questions }) => {
  return (
    <div className="home">
      <ul>
        {questions.map((question) => {
          return (
            <li key={question.id}>
              <div className="questionheader">
                <h2>Question {question.number}</h2>
                <p>[{question.marks}]</p>
              </div>
              <div className="questionbox">
                <p>{question.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionList;
