import './Toolbar.css'
import {isMobile} from "../../globals";
import {useDispatch} from "react-redux";

const Toolbar = () => {
  const dispatch = useDispatch();

  const handleNavigationChange = (event, eventType) => {
    dispatch({type: "page", payload: eventType});
  }

  return (
    <div>
      {
        !isMobile() ?
          <div className='toolbar'>
            <div onClick={
              (event) => handleNavigationChange(event, 'main')
            } className='toolbar-logo-wrapper'>
            <div  className='toolbar-logo'>Центр олимпиадной подготовки
            </div>
            </div>
            <div className='toolbar-navigation'>
              <div onClick={
                  (event) => handleNavigationChange(event, 'enroll')
                } className='toolbar-link-wrapper'>
                <div className='toolbar-link'> Записаться на курс
                </div>
              </div>
              <div onClick={
                  (event) => handleNavigationChange(event, 'program')
                } className='toolbar-link-wrapper'>
                <div className='toolbar-link'>Программа
                </div>
              </div>
              <div onClick={
                  (event) => handleNavigationChange(event, 'teachers')
                } className='toolbar-link-wrapper'>
                <div className='toolbar-link'>Преподаватели
                </div>
              </div>
              <div onClick={
                  (event) => handleNavigationChange(event, 'main')
                } className='toolbar-link-wrapper'>
                <div className='toolbar-link'>На главную
                </div>
              </div>
            </div>
          </div> :

          <div className='toolbar-mobile'>
            <div onClick={
                (event) => handleNavigationChange(event, 'enroll')
              } className='toolbar-link-wrapper'>
              <div className='toolbar-link'> Записаться на курс
              </div>
            </div>
            <div onClick={
                (event) => handleNavigationChange(event, 'program')
              } className='toolbar-link-wrapper'>
              <div className='toolbar-link'> Программа
              </div>
            </div>
            <div onClick={
                (event) => handleNavigationChange(event, 'teachers')
              } className='toolbar-link-wrapper'>
              <div  className='toolbar-link'>Преподаватели
              </div>
            </div>
          </div>
      }
    </div>
  );
}

export default Toolbar;

