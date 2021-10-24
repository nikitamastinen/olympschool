import './Teachers.css'
import {CardRibbon} from "../Lib/CardRibbon/CardRibbon";
import TeacherCard from "./TeacherCard/TeacherCard";

const Teachers = () => {

  return (
    <>
      <h1>
        Наши преподаватели
      </h1>
      <CardRibbon cards={
        <>
          <TeacherCard/>
          <TeacherCard/>
          <TeacherCard/>
        </>
      }/>
    </>
  );
}

export default Teachers;