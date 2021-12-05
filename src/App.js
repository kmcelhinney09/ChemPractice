import Header from './Header';
import PracticeSelection from './PracticeSelection';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <div>
        <Header />
      </div>
      <div>
        <PracticeSelection />
      </div>

    </div>
  );
}

export default App;
