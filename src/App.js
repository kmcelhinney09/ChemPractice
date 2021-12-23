import React, { useState } from 'react';
import Header from './Header';
// import PracticeSelection from './PracticeSelection';
// import PracticeSettings from './PracticeSettings';
import QuizRender from './QuizRender';
// import HighScores from './HighScores';
import { CssBaseline, Container } from '@material-ui/core';



function App() {
  const [questionSettings, setQuestionSettings] = useState({
    numberOfQuestions: 5,
    numberOfElements: 2,
      questionType:"predictBond",
      questionStem: "Predict if {name} and {name} will produce an ionic, polar covalent, or non-polar covalent bond?",
      answerChoices: [
        {answerText: "ionic", isCorrect:false},
        {answerText:"polar covalent", isCorrect:false},
        {answerText:"non-polar covalent", isCorrect:false}
      ]
  })
  return (
    <>
      <CssBaseline />
      <Header />
      <div>
        <Container>
          {/* <PracticeSelection /> */}
          {/* <PracticeSettings /> */}
          <QuizRender questionSettings={questionSettings}/>
          {/* <HighScores /> */}
        </Container>
      </div>

    </>
  );
}

export default App;
