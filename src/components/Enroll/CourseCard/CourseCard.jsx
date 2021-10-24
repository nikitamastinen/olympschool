import './CourseCard.css'
import check_icon from '../../../images/check_icon.svg'

const CourseCard = (props) => {

  return (
    <div className='course-card-wrapper'>
      <div className='course-card'>
        <h2>Олимпиадная математика</h2>
        <div>
          <div className='course-card-item'>
            <img className='check' src={check_icon} alt={'check-icon'}/>
            <div>Занятия внутри небольшой группы</div>
          </div>
          <div className='course-card-item'>
            <img className='check' src={check_icon} alt={'check-icon'}/>
            <div>Отслушка задач -
              личное общение с преподавателем о решенных задачах
            </div>
          </div>
          <div className='course-card-item'>
            <img className='check' src={check_icon} alt={'check-icon'}/>
            <div>Подробные интерактивные разборы</div>
          </div>
          <div className='course-card-item'>
            <img className='check' src={check_icon} alt={'check-icon'}/>
            <div>Рейтинговая система</div>
          </div>
          <div className='course-card-item'>
            <img className='check' src={check_icon} alt={'check-icon'}/>
            <div>Тренировочные олимпиады</div>
          </div>
          <hr style={{width: '100%', background: '#2943b9 !important'}}/>
          <div className='course-card-bottom'>
            <h2 style={{margin: 0}}>3,900 руб</h2>
            <button className='course-enroll-button'>Записаться</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;