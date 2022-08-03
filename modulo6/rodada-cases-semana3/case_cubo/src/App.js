import Home from './pages/Home';
import GlobalState from "./constants/GlobalState"
import './App.css';

function App() {
  return (
    <GlobalState>
      <Home />
    </GlobalState>
  );
}

export default App;
