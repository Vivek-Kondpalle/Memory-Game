import './App.css';
import PlayScreen from './components/PlayScreen';

function App() {
  window.onbeforeunload = (event) => {
    const e = event || window.event;

    e.preventDefault();
    if (e) {
      e.returnValue = '';
    }
    return '';
  };
  return (
    <div>
      <PlayScreen />
    </div>
  );
}

export default App;
