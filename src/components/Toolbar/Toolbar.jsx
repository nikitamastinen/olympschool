import './Toolbar.css'
import {isMobile} from "../../globals";
import {useDispatch} from "react-redux";
import {shift} from "../../globals"

const Toolbar = (props) => {
  const dispatch = useDispatch();

  const handleNavigationChange = (event, eventType) => {
    dispatch({type: "page", payload: eventType});
  }

  return (
    <div>
      {
        !isMobile() ?
          <div className='toolbar' style={{
            background: props.background,
            color: props.color,
            height: `${props.height}px`,
            paddingLeft: `${shift()}px`,
            paddingRight: `${shift()}px`,
          }}>
            {/*<div className='toolbar-wrapper'>*/}
              <div onClick={
                (event) => handleNavigationChange(event, 'main')
              } className='toolbar-logo-wrapper'>
                <div className='toolbar-logo'>Центр олимпиадной подготовки
                </div>
              </div>
              <div className='toolbar-navigation'>
                <div onClick={
                  (event) => handleNavigationChange(event, 'enroll')
                } className='toolbar-link-wrapper'>
                  <div className='toolbar-link'> Курсы
                  </div>
                </div>
                <div onClick={
                  (event) => handleNavigationChange(event, 'teachers')
                } className='toolbar-link-wrapper'>
                  <div className='toolbar-link'>Преподаватели
                  </div>
                </div>
                <div onClick={
                  (event) => handleNavigationChange(event, 'program')
                } className='toolbar-link-wrapper'>
                  <div className='toolbar-link'>О нас
                  </div>
                </div>
                <div onClick={
                  (event) => handleNavigationChange(event, 'main')
                } className='toolbar-link-wrapper'>
                  <div className='toolbar-link'>На главную
                  </div>
                </div>
              </div>
            {/*</div>*/}
          </div> :

          <div className='toolbar-mobile' style={{
            background: props.background,
            color: props.color,
            height: `${props.height}px`,
          }}>
            <div onClick={
              (event) => handleNavigationChange(event, 'enroll')
            } className='toolbar-link-wrapper'>
              <div className='toolbar-link'> Курсы
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
              <div className='toolbar-link'>Преподаватели
              </div>
            </div>
          </div>
      }
    </div>
  );
}

export default Toolbar;

