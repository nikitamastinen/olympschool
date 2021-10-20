import './Toolbar.css'
import {isMobile} from "../../globals";
import {useEffect} from "react";

const Toolbar = () => {

  return (
    <div>
      {
        !isMobile() ?
          <div className='toolbar'>
            <a className='toolbar-logo'>Центр олимпиадной подготовки</a>
            <div className='toolbar-navigation'>
              <a className='toolbar-link'>Записаться на курс</a>
              <a className='toolbar-link'>Программа</a>
              <a className='toolbar-link'>Преподаватели</a>
              <a className='toolbar-link'>На главную</a>
            </div>
          </div> :
          <div className='toolbar-mobile'>
            <a className='toolbar-link'>Записаться на курс</a>
            <a className='toolbar-link'>Программа</a>
            <a className='toolbar-link'>Преподаватели</a>
          </div>
      }
    </div>
  );
}

export default Toolbar;

