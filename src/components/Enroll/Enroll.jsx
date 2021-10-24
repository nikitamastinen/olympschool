import Timeline from "./TimeLine/TimeLine";
import './Enroll.css';
import {CardRibbon} from "../Lib/CardRibbon/CardRibbon";
import CourseCard from "./CourseCard/CourseCard";

const Enroll = () => {
  return (
    <>
      <h1 className={'enroll-header'}>
        Выбор курсов
      </h1>
      <CardRibbon cards={
        <>
          <CourseCard/>
          <CourseCard/>
        </>
      }
      />
      <div style={{marginLeft: '20px', marginRight: '20px', marginBottom: '20px'}}>
        <div style={{marginTop: '10px', paddingTop: '5px', background: '#efcb66', borderRadius: '10px', boxShadow: '0 4px 9px #c3cec3'}}>
          <h2 className={'enroll-header'}>
            Как поступить на обучение?
          </h2>
          <Timeline/>
        </div>
      </div>
    </>
  );
}

export default Enroll;