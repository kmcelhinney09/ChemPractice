import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PracticeSelection from './PracticeSelection';
import PracticeSettings from './PracticeSettings';
import QuizRender from './QuizRender';
import HighScores from './HighScores';
import { Container } from '@material-ui/core';



function App() {
  const [questionSettings, setQuestionSettings] = useState({
    numberOfQuestions: 5,
    numberOfElements: 2,
    questionType: "predictBond",
    questionStem: "Predict if {name} and {name} will produce an ionic, polar covalent, or non-polar covalent bond?",
    answerChoices: [
      { answerText: "ionic", isCorrect: false },
      { answerText: "polar covalent", isCorrect: false },
      { answerText: "non-polar covalent", isCorrect: false }
    ]
  })
  return (
    <>
      <BrowserRouter>
        <Container>
          <Switch>
            <Route path="/PracticeSettings">
              <PracticeSettings />
            </Route>
            <Route path="/Quiz">
              <QuizRender questionSettings={questionSettings} />
            </Route>
            <Route path="/HighScore">
              <HighScores />
            </Route>
            <Route exact path="/">
              <PracticeSelection />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>

    </>
  );
}

export default App;
