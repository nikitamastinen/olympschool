import './Cart.css'
import {shift} from "../../globals";
import {useState} from "react";

const Application = (props) => {
    return (
        <>
            <div className='application' onClick={() => props.setIsShowed(false)}>

            </div>
            <div className='application-dialog' style={{marginLeft: `${shift()}px`, marginRight: `${shift()}px`}}>
                <h1>Отправить заявку на выбранные курсы</h1>
                <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: '100%'}}>
                    <div className='application-chosen'>
                        <input className='application-input' placeholder='Имя *'/>
                        <input className='application-input' placeholder='Контакты для связи *'/>
                        <textarea className='application-input-long' placeholder='Комментарии (не обязательно)' rows='5'/>
                        <div className='application-send'>Отправить</div>
                    </div>
                        <div className='application-form'/>
                        <div className='close' onClick={() => props.setIsShowed(false)}/>
                </div>
            </div>
        </>
    );
}

const Cart = () => {
    return null
    const [isApplicationShowed, setIsApplicationShowed] = useState(false);

    return (
        <>
            {isApplicationShowed ?
                <Application
                    isShowed={isApplicationShowed}
                    setIsShowed={setIsApplicationShowed}
                />
                : null}
            <div className='cart' style={{paddingLeft: `${shift()}px`, paddingRight: `${shift()}px`}}>
                <div className='cart-header'>
                    1 курс выбран
                </div>
                <div className='cart-button' onClick={() => setIsApplicationShowed(true)}>
                    Отправить заявку
                </div>

            </div>
        </>
    );
}

export default Cart;