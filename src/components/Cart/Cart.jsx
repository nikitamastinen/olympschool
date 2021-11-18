import './Cart.css'
import {shift} from "../../globals";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

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

const russianSpeller = (number) => {
    if (number <= 20 && number >= 5) {
        return 'курсов выбрано'
    }
    if (number % 10 === 1) {
        return 'курс выбран'
    }
    return 'курса выбрано'
}

const Cart = () => {
    const [isApplicationShowed, setIsApplicationShowed] = useState(false);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    return (
        <>
        {
            cart.length === 0 ? null : <>
                {isApplicationShowed ?
                    <Application
                        isShowed={isApplicationShowed}
                        setIsShowed={setIsApplicationShowed}
                    />
                    : null}
                <div className='cart' style={{paddingLeft: `${shift()}px`, paddingRight: `${shift()}px`}}>
                    <div className='cart-header'>
                        {cart.length} {russianSpeller(cart.length)}
                    </div>
                    <div className='cart-button' onClick={() => setIsApplicationShowed(true)}>
                        Отправить заявку
                    </div>
                    <div className='close-cart' onClick={() => {
                        dispatch({type: "cart", payload: []});
                    }
                    }/>

                </div>
            </>
        }
        </>
    );
}

export default Cart;