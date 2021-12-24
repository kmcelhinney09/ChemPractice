import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PracticeSelection from './PracticeSelection';
import PracticeSettings from './PracticeSettings';
import QuizRender from './QuizRender';
import HighScores from './HighScores';
import { Container } from '@material-ui/core';



function App() {
  const [questionSettings, setQuestionSettings] = useState({
    numberOfQuestions: 0,
    numberOfElements: 0,
    questionType: "",
    questionStem: "",
    answerChoices: []
  })
  console.log(questionSettings)
  return (
    <>
      <BrowserRouter>
        <Container>
          <Switch>
            <Route path="/PracticeSettings">
              <PracticeSettings questionSettings={questionSettings} setQuestionSettings={setQuestionSettings}/>
            </Route>
            <Route path="/Quiz">
              <QuizRender questionSettings={questionSettings} />
            </Route>
            <Route path="/HighScore">
              <HighScores />
            </Route>
            <Route exact path="/">
              <PracticeSelection questionSettings={questionSettings} setQuestionSettings={setQuestionSettings}/>
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>

    </>
  );
}

export default App;
