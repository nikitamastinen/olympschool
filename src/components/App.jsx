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
import MainPage from "./MainPage/MainPage";

function App() {

  const navigationPageType = useSelector(state => state.page);
  const [toolbarBackground, setToolbarBackground] = useState(null);
  const [toolbarColor, setToolbarColor] = useState(null);

  useEffect(() => {
    if (navigationPageType === 'main') {
      setToolbarColor('white');
      //setToolbarBackground('#b1040e');
      setToolbarBackground('transparent')
    } else {
      setToolbarColor('white');
      setToolbarBackground('#b1040e');
    }
  }, [navigationPageType])

  const [initHeight, setInitHeight] = useState(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  console.log(dimensions);
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    setInitHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <div className='App'>
      <Toolbar
        background={toolbarBackground}
        color={toolbarColor}
        height={initHeight * 0.08}
      />
      <div className={navigationPageType === 'main' && 'margin-toolbar'}
           style={{
             height:`${window.outerHeight}px` ,
             paddingTop: `${initHeight * 0.08}px`,
           }}
      >
      <div className='paper'>
        {
          navigationPageType === 'main' &&
          <>
            <MainPage/>
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
            {/*<div style={{overflow: "hidden", position: "absolute"}}>*/}
              <div className='circle3'></div>
            {/*<div className='circle'></div>*/}
            {/*<div className='circle2'></div>*/}
            {/*<div className='triangle'></div>*/}
            <Enroll/>
          </>
        }

        </div>
      </div>
    </div>
  );
}

export default App;
