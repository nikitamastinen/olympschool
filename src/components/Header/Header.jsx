import './Header.css'
import useResizeObserver from "use-resize-observer";
import {useRef, useState} from "react";

const Header = () => {

  let figureSizes = [];
  for (let i = 0; i < 40; i++) {
      figureSizes[i] = 90;
  }

  return (
    <div className='wrapper' style={{height: `${window.innerHeight}px`}}>
      <div className='header'>
        <div className='header-text'>
          Победителями олимпиад становятся здесь
        </div>
        <div className='header-description'>
          Поступайте в центр олимпиадной подготовки
          и прокачивайте свой уровень до победы в таких олимпиадах, как
          ВСОШ, Эйлера
        </div>
        <button className='header-enroll-button'>
          Записаться на курс
        </button>
        {/*<div className="header-figure">*/}
        {/*  {*/}
        {/*    figureSizes.map(element => {*/}
        {/*      return <span*/}
        {/*        className='dot'*/}
        {/*        style={{*/}
        {/*          marginTop: `${element}px`,*/}
        {/*          width: `${1}vw`,*/}
        {/*          height: `${1}vw`,*/}
        {/*        }}/>*/}
        {/*    })*/}
        {/*  }*/}
        {/*</div>*/}
        <div className='header-continue'>
          Узнать подробнее   &#709;
        </div>
      </div>
    </div>
  );
}

export default Header;