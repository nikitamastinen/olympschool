import './Header.css'
import {useEffect, useRef, useState} from "react";

const Header = () => {

  let figureSizes = [];
  for (let i = 0; i < 40; i++) {
    figureSizes[i] = 90;
  }

  const bottomOfHeader = useRef(null);
  const scrollToBottomOfPage = () => {
    alert("kek");
    bottomOfHeader.current.scrollIntoView()
  }


  const [initialWindowHeight, setInitialWindowHeight] = useState(null);
  const [moreButton, setMoreButton] = useState(null);

  useEffect(() => {
    setInitialWindowHeight(window.innerHeight * 0.92);
    window.addEventListener('scroll', (event) => {
      setMoreButton('none');
    });
  }, [])

  return (
    <div className='wrapper' style={{height: `${initialWindowHeight}px`}}>
      {/*<div className='header-image-filter'>*/}
      <img className='header-image'
           style={{
             minHeight: `${initialWindowHeight}px`,
             minWidth: `100%`,
           }}
           src='https://mskrnews.ru/wp-content/uploads/2019/04/moskovskie-shkolniki-zavoevali-67-nagrad-v-finale-vserossijskoj-olimpiady.jpg'
           alt={'olympiad-center'}/>
      {/*</div>*/}
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
        <div ref={bottomOfHeader} className='header-continue' onClick={scrollToBottomOfPage}>
          Узнать подробнее   &#709;
        </div>
      </div>
    </div>
  );
}

export default Header;