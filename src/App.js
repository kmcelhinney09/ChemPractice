import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PracticeSelection from './PracticeSelection';
import PracticeSettings from './PracticeSettings';
import QuizRender from './QuizRender';
import HighScores from './HighScores';
import { Container } from '@material-ui/core';



function App() {
  const [highScoreData, setHighScoreData] = useState([])
  const [reloadHighScore, setReloadHighScore] = useState(false)
  const [questionSettings, setQuestionSettings] = useState({
    numberOfQuestions: 0,
    numberOfElements: 0,
    questionType: "",
    questionStem: "",
    answerChoices: []
  })

  useEffect(() => {
    fetch("http://localhost:6001/highscores")
      .then(res => res.json())
      .then(highScoreDBData => {
        const highScoreCatagorize = Object.entries(highScoreDBData).map(entry => entry[1])
        setHighScoreData(highScoreCatagorize)
      })
  }, [reloadHighScore])

  return (
    <>
      <BrowserRouter>
        <Container>
          <Switch>
            <Route path="/PracticeSettings">
              <PracticeSettings questionSettings={questionSettings} setQuestionSettings={setQuestionSettings} />
            </Route>
            <Route path="/Quiz">
              <QuizRender questionSettings={questionSettings} highScoreData={highScoreData} setReloadHighScore={setReloadHighScore}/>
            </Route>
            <Route path="/HighScore">
              <HighScores highScoreData={highScoreData}/>
            </Route>
            <Route exact path="/">
              <PracticeSelection questionSettings={questionSettings} setQuestionSettings={setQuestionSettings} />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>

    </>
  );
}

export default App;
