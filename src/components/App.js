import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import './App.css';
import {isMobile} from "../globals";

import Toolbar from "./Toolbar/Toolbar";

import Header from "./Header/Header";
import Description from "./Description/Description";

import Program from "./Program/Program";

import Teachers from "./Teachers/Teachers";

function App() {
  const navigationPageType = useSelector(state => state.page);

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  console.log(dimensions);
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <div className='App'>
      <Toolbar/>
      <div className='margin-toolbar'
           style={{
             paddingTop: !isMobile() ? 'calc(8vh)' : 'calc(8vh)',
           }}
      >
        <div className='paper'>
          {
            navigationPageType === 'main' &&
            <>
              <Header/>
              <Description/>
            </>
          }
          {
            navigationPageType === 'program' &&
            <>
              <Program/>
            </>
          }
          {
            navigationPageType === 'teachers' &&
            <>
              <Teachers/>
            </>
          }

        </div>
      </div>
    </div>
  );
}

export default App;
