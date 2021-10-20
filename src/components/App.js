import './App.css';
import Toolbar from "./Toolbar/Toolbar";
import Header from "./Header/Header";
import Description from "./Description/Description";
import Program from "./Program/Program";
import {isMobile} from "../globals";

function App() {
  return (
    <div className='App'>
      <Toolbar/>
      <div className='margin-toolbar'
           style={{
             paddingTop: isMobile() ? 'calc(5vh + 1.5vw)' :  'calc(5vh + 3.5vw)',
           }}
      >
      <div className='paper'>
        {/*<Program/>*/}
        <Header/>
        <Description/>
      </div>
    </div>
    </div>
  );
}

export default App;
