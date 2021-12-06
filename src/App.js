import Header from './Header';
import PracticeSelection from './PracticeSelection';
import PracticeSettings from './PracticeSettings';
import { CssBaseline, Container } from '@material-ui/core';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <div>
        <Container>
          {/* <PracticeSelection /> */}
          <PracticeSettings />
        </Container>
      </div>

    </>
  );
}

export default App;
