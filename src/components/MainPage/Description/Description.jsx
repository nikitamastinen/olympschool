import './Description.css'
import {shift} from "../../../globals";
import figure from '../../../images/kek.svg'

const Description = () => {

    return (
        <>
            <div className='description-about' style={{paddingLeft: `${shift()}px`, paddingRight: `${shift()}px`}}>
                {/*<img src={figure} alt='figure' style={{width: '50vw'}}/>*/}
                <h1 className='description-header'>Подробнее о Jet School</h1>
                <div className='description-text'>
                    До недавнего времени мы, бывшие победители олимпиад
                    - ныне ученики МФТИ, ВШЭ, СПБГУ и других топовых вузов
                    России, занимались репетиторством и обучением
                    знакомых школьников математике и информатике.{'\n\n'}
                    Так продолжалось до
                    тех пор, пока не появился Центр Олимпиадной Подготовки,
                    впитавший в себя лучшие стратегии обучения детей математике
                </div>
            </div>
            <div className='description-why' style={{paddingLeft: `${shift()}px`, paddingRight: `${shift()}px`}}>
                {/*<img src={figure} alt='figure' style={{width: '50vw'}}/>*/}
                <h1 className='description-header'>Почему мы?</h1>
                <div className='description-text'>
                    До недавнего времени мы, бывшие победители олимпиад
                    - ныне ученики МФТИ, ВШЭ, СПБГУ и других топовых вузов
                    России, занимались репетиторством и обучением
                    знакомых школьников математике и информатике.{'\n\n'}
                    Так продолжалось до
                    тех пор, пока не появился Центр Олимпиадной Подготовки,
                    впитавший в себя лучшие стратегии обучения детей математике
                </div>
            </div>
        </>
    );
}

export default Description;
