import Timeline from "./TimeLine/TimeLine";
import './Enroll.css';
import {CardRibbon} from "../Lib/CardRibbon/CardRibbon";
import CourseCard from "./CourseCard/CourseCard";
import COURSES from "../../content/COURSES";
import {shift} from "../../globals";

const DropDown = () => {
    const QUESTIONS = [1, 1, 1, 1, 1];
    return (
        QUESTIONS.map(() => {
            return (
                <div style={{
                    color: 'black',
                    background: 'white',
                    width: '100%',
                    fontSize: '24px',
                    fontWeight: '100',
                    textAlign: 'start',
                    padding: '10px',
                    paddingLeft: '20px',
                    border: 'solid 1px lightgrey',
                    borderRadius: '10px',
                    marginBottom: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <div>
                    Что будет, если оплатив курс я пойму, что он мне не понравился?
                    </div>
                    <b style={{display: 'flex'}}>{'>'}</b>
                </div>
            )
        })

    );
}

const Enroll = (props) => {
    return (
        <>
            <div style={{
                background: '#f9f6ef',
                // backgrou
                zIndex: 10,
                paddingLeft: `${shift() - 10}px`,
                paddingRight: `${shift() - 10}px`,
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

                </div>
            </div>
            <div style={{
                background: '#3f3434',
                // backgrou
                zIndex: 10,
                paddingLeft: `${shift()}px`,
                paddingRight: `${shift()}px`,
            }}>
                <div style={{marginLeft: '10px', marginRight: '10px', marginBottom: '20px'}}>
                    <div style={{
                        marginTop: '10px',
                        paddingTop: '5px',
                        // background: '#3f3434',
                        //background: 'white',
                        borderRadius: '10px',
                        // boxShadow: '0 4px 9px #9d9d9d',
                        color: 'white',

                    }}>
                        <h2 className='timeline-header'>
                            Как поступить на обучение?
                        </h2>
                        <Timeline/>
                    </div>
                </div>
            </div>
            <div style={{
                // marginTop: '10px',
                paddingTop: '5px',
                background: 'rgb(249, 246, 239)',
                paddingLeft: `${shift()}px`,
                paddingRight: `${shift()}px`,
                // borderRadius: '10px',
                // boxShadow: '0 4px 9px #9d9d9d',
                color: 'black',
                zIndex: '10',
                paddingBottom: '60px',

            }}>
                <h2 className='timeline-header'>
                    Остались вопросы?
                </h2>
                <DropDown/>

            </div>
        </>
    );
}

export default Enroll;