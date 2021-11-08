import './Teachers.css'
import TeacherCard from "./TeacherCard/TeacherCard";
import TEACHERS from "../../content/TEACHERS";

const Teachers = () => {

  return (
    <>
      <h1>
        Наши преподаватели
      </h1>
      <div className='teachers-ribbon'>
        {
          TEACHERS.map(element =>
            <TeacherCard data={element}/>
          )

        }
      </div>
    </>
  );
}

export default Teachers;