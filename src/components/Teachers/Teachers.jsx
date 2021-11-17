import './Teachers.css'
import TeacherCard from "./TeacherCard/TeacherCard";
import TEACHERS from "../../content/TEACHERS";
import {shift} from "../../globals";

const Teachers = () => {

  return (
    <div style={{zIndex: 100, background: 'white', paddingLeft: `${shift() - 20}px`, paddingRight: `${shift() - 20}px`}}>
      <div style={{fontSize: '48px', fontWeight: 500, marginTop: '30px', marginBottom: '20px'}}>
        Наши преподаватели
      </div>
      <div className='teachers-ribbon'>
        {
          TEACHERS.map(element =>
            <TeacherCard data={element}/>
          )
        }
      </div>
    </div>
  );
}

export default Teachers;