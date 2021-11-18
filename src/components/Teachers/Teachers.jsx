import './Teachers.css'
import TeacherCard from "./TeacherCard/TeacherCard";
import TEACHERS from "../../content/TEACHERS";
import {shift} from "../../globals";
import leftArrow from "../../images/left-arrow.svg"
import rightArrow from "../../images/right-arrow.svg"
import {useState} from "react";

const Teachers = () => {
    const [startIndex, setStartIndex] = useState(0);
    return (
        <div style={{
            zIndex: 100,
            background: 'white',
            // color: 'white',
            // background: '#5b5151',
            paddingLeft: `${shift()}px`,
            paddingRight: `${shift()}px`,
            // color: 'white',
        }}>
            <h1 style={{fontSize: '32px', fontWeight: 700, marginTop: '30px', marginBottom: '20px'}}>
                Наши преподаватели
            </h1>
            <div style={{display: 'flex'}}>
                <img className='arrow' src={leftArrow} alt='left-arrow' onClick={() => setStartIndex((startIndex + TEACHERS.length - 1) % TEACHERS.length)}/>
                <div className='teachers-ribbon' style={{color: 'black'}}>
                    {
                        TEACHERS.map((_, index) =>
                            <TeacherCard data={TEACHERS[(index + startIndex) % TEACHERS.length]}/>
                        )
                    }
                </div>
                 <img className='arrow' src={rightArrow} alt='right-arrow' onClick={() => setStartIndex(startIndex + 1)}/>
            </div>
        </div>
    );
}

export default Teachers;