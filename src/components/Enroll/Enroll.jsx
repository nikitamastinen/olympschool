import Timeline from "./TimeLine/TimeLine";
import './Enroll.css';
import {CardRibbon} from "../Lib/CardRibbon/CardRibbon";
import CourseCard from "./CourseCard/CourseCard";
import COURSES from "../../content/COURSES";

const Enroll = () => {
  return (
    <div style={{
        // background: 'grey',
        // zIndex: -12,
        zIndex: 100,
      }}>
      <div style={{
        zIndex: 0,
      }}>
        <h1 className='enroll-header'>
          Выбор курсов
        </h1>
        <div style={{}}>
          <CardRibbon cards={
            <>
              {
                COURSES.map((element) =>
                  <CourseCard data={element}/>
                )
              }

            </>
          }
          />
        </div>
        <div style={{marginLeft: '20px', marginRight: '20px', marginBottom: '20px'}}>
          <div style={{
            marginTop: '10px',
            paddingTop: '5px',
            background: '#f6de71',
            borderRadius: '10px',
            boxShadow: '0 4px 9px #c3cec3'
          }}>
            <h2 className='timeline-header'>
              Как поступить на обучение?
            </h2>
            <Timeline/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enroll;