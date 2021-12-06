import Header from './Header';
import PracticeSelection from './PracticeSelection';
import { CssBaseline, Container } from '@material-ui/core';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <div>
        <Container>
          <PracticeSelection />
        </Container>
      </div>

    </>
  );
}

export default App;
