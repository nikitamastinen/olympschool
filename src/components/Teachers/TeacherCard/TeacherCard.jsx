import './TeacherCard.css'

const TeacherCard = (props) => {
  return (
    <div className='teacher-card-wrapper'>
      <div className='teacher-card'>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
          <img className='teacher-image'
               src={props.data.image}
               alt='teacher'/>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            textAlign: 'center',
            width: '100%',
          }}>
            <h3 style={{marginBottom: '10px'}}>{props.data.name}</h3>
          </div>
        </div>
        <div className='teacher-card-description'>
          <div style={{marginTop: '10px'}}/>
          <b>📎 Предмет</b>
          {'- ' + props.data.subject}
          <div style={{marginTop: '10px'}}/>
          <b>📖 Образование</b>
          {
            props.data.education.map(place =>
              <div>{'- ' + place}</div>
            )
          }
          <div style={{marginTop: '10px'}}/>
          <b>🏆 Заслуги</b>
          {
            props.data.achievements.map(achievement =>
              <div>{'- ' + achievement}</div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default TeacherCard;