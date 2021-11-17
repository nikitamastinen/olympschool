import './Header.css'
import {useEffect, useRef, useState} from "react";
import winners2 from "../../../images/winners2.png"

const Header = () => {

  const [initialWindowHeight, setInitialWindowHeight] = useState(null);
  const [moreButton, setMoreButton] = useState(null);


  let figureSizes = [];
  for (let i = 0; i < 40; i++) {
    figureSizes[i] = 90;
  }

  const bottomOfHeader = useRef(null);
  const scrollToBottomOfPage = () => {
    window.scrollBy(0, initialWindowHeight);
  }

  useEffect(() => {
    setInitialWindowHeight(window.innerHeight);
    window.addEventListener('scroll', (event) => {
      setMoreButton('none');
    });
  }, [])

  return (
    <div className='wrapper' style={{height: `${initialWindowHeight}px`}}>
      <img className='header-image'
           style={{
             minHeight: `${initialWindowHeight}px`,
             minWidth: `100%`,
           }}
           src='https://mskrnews.ru/wp-content/uploads/2019/04/moskovskie-shkolniki-zavoevali-67-nagrad-v-finale-vserossijskoj-olimpiady.jpg'
           alt={'olympiad-center'}/>
      <div className='header'>
        <div className='header-text'>
          Jet School
        </div>
        <div className='header-description'>
          Победителями олимпиад становятся здесь
        </div>
        <button className='header-enroll-button'>
          Записаться на курс
        </button>
        <div ref={bottomOfHeader} className='header-continue' onClick={scrollToBottomOfPage}>
          Узнать подробнее   &#709;
        </div>
      </div>
    </div>
  );
}

export default Header;