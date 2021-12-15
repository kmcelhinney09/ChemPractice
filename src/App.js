import Header from './Header';
// import PracticeSelection from './PracticeSelection';
// import PracticeSettings from './PracticeSettings';
import QuizRender from './QuizRender'
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
          <QuizRender />
        </Container>
      </div>

    </>
  );
}

export default App;
