import './CourseCard.css'
import check_icon from '../../../images/check_icon.svg'

const CourseCard = (props) => {
  return (
    <div className='course-card-wrapper'>
      <div className='course-card'>
        <h2>{props.data.header}</h2>
        <div>
          {
            props.data.features.map((element) => 
            <div className='course-card-item'>
              <img className='check' src={check_icon} alt={'check-icon'}/>
              <div>
                {element}
              </div>
            </div>)
          }
          <hr style={{width: '100%', background: '#2943b9 !important'}}/>
          <div className='course-card-bottom'>
            <h2 style={{margin: 0}}>{props.data.price}</h2>
            <button className='course-enroll-button'>Записаться</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;