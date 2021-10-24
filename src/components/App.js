import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import './App.css';
import {isMobile} from "../globals";

import Toolbar from "./Toolbar/Toolbar";

import Header from "./MainPage/Header/Header";
import Description from "./MainPage/Description/Description";

import Program from "./Program/Program";

import Teachers from "./Teachers/Teachers";

import Enroll from "./Enroll/Enroll";

function App() {

  const navigationPageType = useSelector(state => state.page);
  const [toolbarBackground, setToolbarBackground] = useState(null);
  const [toolbarColor, setToolbarColor] = useState(null);

  useEffect(() => {
    if (navigationPageType === 'main') {
      setToolbarColor('white');
      setToolbarBackground('transparent')
    } else {
      setToolbarColor('white');
      setToolbarBackground('black');
    }
  }, [navigationPageType])

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });
  console.log(dimensions);
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
    });
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <div className='App'>
      <Toolbar
        background={toolbarBackground}
        color={toolbarColor}
      />
      <div className={navigationPageType === 'main' && 'margin-toolbar'}
           style={{
             height: `100vh`,
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
          {
            navigationPageType === 'enroll' &&
            <>
              <Enroll/>
            </>
          }

        </div>
      </div>
    </div>
  );
}

export default App;
