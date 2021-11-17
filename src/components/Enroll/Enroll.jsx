import Timeline from "./TimeLine/TimeLine";
import './Enroll.css';
import {CardRibbon} from "../Lib/CardRibbon/CardRibbon";
import CourseCard from "./CourseCard/CourseCard";
import COURSES from "../../content/COURSES";
import {shift} from "../../globals";

const Enroll = (props) => {
    return (
        <div style={{
            background: '#f9f6ef',
            // backgrou
            zIndex: 10,
            paddingLeft: `${shift() - 20}px`,
            paddingRight: `${shift() - 20}px`,
        }} ref={props.ref}>
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
                        // background: '#020202',
                        background: 'white',
                        borderRadius: '10px',
                        boxShadow: '0 4px 9px #9d9d9d'
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