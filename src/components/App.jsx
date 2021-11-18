import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";

import './App.css';
import {isMobile} from "../globals";

import Toolbar from "./Toolbar/Toolbar";

import Header from "./MainPage/Header/Header";
import Description from "./MainPage/Description/Description";

import Program from "./Program/Program";

import Teachers from "./Teachers/Teachers";

import Enroll from "./Enroll/Enroll";
import MainPage from "./MainPage/MainPage";
import Cart from "./Cart/Cart";


function App() {
    const TOOLBAR_HEIGHT = 50;
    const [toolbarBackground, setToolbarBackground] = useState('transparent');
    const [toolbarColor, setToolbarColor] = useState('white');
    const [executeScroll, setExecuteScroll] = useState(null);

    const enrollRef = useRef(null);
    const teachersRef = useRef(null);
    const navigationPageType = useSelector(state => state.page);
    const dispatch = useDispatch();
   // const [initialWindowHeight, ] = useState(window.innerHeight)
    const initialWindowHeight = window.innerHeight;
    useEffect(() => {
        if (executeScroll != null) {
            if (navigationPageType === 'enroll') {
                executeScroll(enrollRef)
            } else if (navigationPageType === 'teachers') {
                executeScroll(teachersRef)
            } else if (navigationPageType === 'about') {
                window.scrollTo(0, initialWindowHeight);
            }
            dispatch({type: "page", payload: 'main'});
        }
    }, [navigationPageType])

    //---------------------------------------------------------------------------------------------
    // const [TOOLBAR_HEIGHT, setInitHeight] = useState(null);
    // const [dimensions, setDimensions] = useState({
    //     width: window.innerWidth,
    //     height: window.innerHeight
    // });
    // console.log(dimensions);
    // const handleResize = () => {
    //     setDimensions({
    //         width: window.innerWidth,
    //         height: window.innerHeight,
    //     });
    // }
    //
    // useEffect(() => {
    //     setInitHeight(window.innerHeight);
    //     window.addEventListener("resize", handleResize, false);
    // }, []);

    //----------------------------------------------
    // -----------------------------------------------
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        if (enrollRef != null) {
            setExecuteScroll(() => (ref) => window.scrollTo(0, ref.current.offsetTop - TOOLBAR_HEIGHT));
        }
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPosition > window.innerHeight - TOOLBAR_HEIGHT) {
            setToolbarBackground('white');
            setToolbarColor('black');
            setToolbarColor('white');
            setToolbarBackground('#b1040e');
        } else {
            setToolbarBackground('transparent');
        }
    }, [scrollPosition])

    return (
        <div className='App'>
            <Toolbar
                background={toolbarBackground}
                color={toolbarColor}
                height={TOOLBAR_HEIGHT}
            />
            <div className={'margin-toolbar'}
                 style={{
                     height: `${window.outerHeight}px`,
                     paddingTop: `${TOOLBAR_HEIGHT}px`,
                 }}
            >
                <div className='paper'>
                    <MainPage/>
                    {/*<div ref={myRef}>*/}
                    <div ref={enrollRef}/>
                    <Enroll/>

                    <div ref={teachersRef}/>
                    <Teachers/>

                    <Cart/>
                </div>

            </div>
        </div>
    );
}

export default App;
