import './TimeLine.css'
import {useEffect, useState} from "react";

const Timeline = (props) => {

  const [timeLineWidth, setTimelineWidth] = useState();

  useEffect(() => {
    const left_offset = document.getElementById('left-circle').getBoundingClientRect();
    const l_left = left_offset.left;

    const right_offset = document.getElementById('right-circle').getBoundingClientRect();
    const r_left = right_offset.left;

    setTimelineWidth(r_left - l_left);

  }, [])


  return (
    <div style={{overflow: 'auto'}}>
    <div className='timeline-wrapper'>
      <div className="timeline" style={{width: timeLineWidth}}/>
      <div className='timeline-circles'>
      </div>
      <div className="timeline-items">
        <b id='left-circle' className='timeline-circle'>1</b>
        <b className='timeline-circle'>2</b>
        <b id='right-circle' className='timeline-circle'>3</b>
        <div className='timeline-card'>
          <h4 style={{marginTop: 0, marginBottom: '5px'}}>Подать заявку на один из курсов ниже</h4>
          <div style={{fontSize:"14px"}}>Мы свяжемся с вами по указанному контакту и договоримся о дате собеседования</div>
        </div>
        <div className='timeline-card'>
          <h4 style={{marginTop: 0, marginBottom: '5px'}}>Пройти собеседование</h4>
          <div style={{fontSize:"14px"}}>Мы расскажем подробнее о выбранных вами курсах и с радостью ответим на все ваши вопросы</div>
        </div>
        <div className='timeline-card'>
          <h4 style={{marginTop: 0, marginBottom: '5px'}}>Оплатить курс</h4>
          <div style={{fontSize:"14px"}}>После этого мы направим приглашения в чаты занятий и дальнейшую информацию</div>
        </div>
      </div>
    </div>
    </div>
  )
}


export default Timeline;