import './App.css';
import Toolbar from "./components/Toolbar/Toolbar";
import Header from "./components/Header/Header";
import Description from "./components/Description/Description";

function App() {
  return (
    <div className='App'>
      <div className='paper'>
        <Toolbar/>
        <Header/>
        <Description/>
      </div>
    </div>
  );
}

export default App;
