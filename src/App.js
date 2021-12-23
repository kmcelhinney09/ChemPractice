import Header from './Header';
// import PracticeSelection from './PracticeSelection';
// import PracticeSettings from './PracticeSettings';
// import QuizRender from './QuizRender';
// import HighScores from './HighScores';
import QuestionGeneration from './QuestionGeneration';
import { CssBaseline, Container } from '@material-ui/core';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <div>
        <Container>
          {/* <PracticeSelection /> */}
          {/* <PracticeSettings /> */}
          {/* <QuizRender /> */}
          {/* <HighScores /> */}
          < QuestionGeneration />
        </Container>
      </div>

    </>
  );
}

export default App;
