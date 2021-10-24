import './TeacherCard.css'

const TeacherCard = (props) => {

  return (
    <div className='teacher-card-wrapper'>
      <div className='teacher-card'>
        <h2 style={{marginTop: '5px', marginBottom: '5px'}}>Альфред Нуртдинов</h2>
        <b>Математика</b>
        <div className='teacher-image-box'>
          <img className='teacher-image'
               src='https://image.shutterstock.com/image-photo/cat-professor-square-academic-hat-600w-1145803769.jpg'
               alt='teacher'/>
          <img className='teacher-image'
               src=' https://media.fulledu.ru/firms/covers/2018.04.21.01/thumbnail/100040000000000000165784.png'
               alt='teacher'/>
        </div>
        <h3 style={{marginTop: '5px', marginBottom: '5px'}}>Собственные заслуги</h3>
        <div >
          Математика - победитель Межгалактической олимпиады
          призер
        </div>
      </div>
    </div>
  );
}

export default TeacherCard;