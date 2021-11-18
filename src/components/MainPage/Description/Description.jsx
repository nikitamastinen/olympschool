import './Description.css'
import {shift} from "../../../globals";
import figure from '../../../images/kek.svg'
import ABOUT from "../../../content/ABOUT";
import WHYWE from "../../../content/WHYWE";

const Description = () => {

    return (
        <>
            <div className='description-about' style={{paddingLeft: `${shift()}px`, paddingRight: `${shift()}px`}}>
                {/*<img src={figure} alt='figure' style={{width: '50vw'}}/>*/}
                <h1 className='description-header'>Подробнее о Jet School</h1>
                <div className='description-text'>
                    {ABOUT}
                </div>
            </div>
            <div className='description-why' style={{paddingLeft: `${shift()}px`, paddingRight: `${shift()}px`}}>
                {/*<img src={figure} alt='figure' style={{width: '50vw'}}/>*/}
                <h1 className='description-header'>Почему мы?</h1>
                <div className='description-text'>
                    {WHYWE}
                </div>
            </div>
        </>
    );
}

export default Description;
