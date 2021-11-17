import './CourseCard.css'
import check_icon from '../../../images/check_icon.svg'

const CourseCard = (props) => {
    return (
        <div className='course-card-wrapper'>
            <div className='course-card'>
                <h2 className={'course-card-header'}>{props.data.header}</h2>
                <div>
                    {
                        props.data.features.map((element) =>
                            <div className='course-card-item'>
                                <img className='check' src={check_icon} alt={'check-icon'}/>
                                <div className='course-card-text'>
                                    {element}
                                </div>
                            </div>)
                    }

                </div>

                <div className='course-card-bottom'>

                    <hr style={{width: '100%', background: '#2943b9 !important'}}/>
                    <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                    <h2 style={{display: 'flex', marginTop: 0, marginBottom: 0, textAlign: 'center', alignItems: 'center', alignContent: 'center'}}>{props.data.price}</h2>
                    <button className='course-enroll-button'>Записаться</button>
            </div>
                </div>
            </div>

        </div>
    );
}

export default CourseCard;