import './CourseCard.css'
import check_icon from '../../../images/check_icon.svg'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

const CourseCard = (props) => {
    const [isChosen, setIsChosen] = useState(false);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const handleItemClicked = () => {
        if (!isChosen) {
            dispatch({type: "cart", payload: [...cart, props.data.id]});
        } else {
            const index = cart.indexOf(props.data.id);
            if (index > -1) {
                cart.splice(index, 1);
            }
            dispatch({type: "cart", payload: [...cart]});
        }
        setIsChosen(!isChosen);
    }

    useEffect(() => {
    }, [isChosen])



    return (
        <div className='course-card-wrapper'>
            <div className='course-card' style={{borderTopColor: props.data.color}}>
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

                    <hr color='grey' style={{width: '100%', color: 'green !important'}}/>
                    <div
                        style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                        <h2 style={{
                            display: 'flex',
                            marginTop: 0,
                            marginBottom: 0,
                            textAlign: 'center',
                            alignItems: 'center',
                            alignContent: 'center'
                        }}>{props.data.price}</h2>
                        {
                            (cart.indexOf(props.data.id) === -1) ? <button onClick={handleItemClicked} className='course-enroll-button'>Записаться</button> :
                              <button onClick={handleItemClicked} className='course-enroll-button-ready'>Отменить</button>
                        }

                    </div>
                </div>
            </div>

        </div>
    );
}

export default CourseCard;