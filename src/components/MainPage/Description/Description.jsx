import './Description.css'
import {shift} from "../../../globals";
import figure from '../../../images/kek.svg'
import ABOUT from "../../../content/ABOUT";
import WHYWE from "../../../content/WHYWE";
import rating from "../../../images/rating.svg";

const Whywe = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
            }}>
                {
                    WHYWE.map((element) => {
                        return (
                            <div style={{display: 'flex', marginBottom: '50px'}}>

                                <img src={element.image} alt={'rating-icon'}
                                     className='whywe-icon'/>
                                <div>
                                    <div>
                                        <div className='whywe-header'>
                                            <div style={{
                                                fontSize: '28px',
                                                fontWeight: '700',
                                                color: '#ffdd00',
                                                marginBottom: '10px',
                                            }}>{element.header}
                                            </div>
                                            {element.description}{'\n\n'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

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
                <h1 className='description-header' style={{color: '#ffdd00'}}>Почему мы?</h1>
                <div className='description-text'>
                    <Whywe/>
                </div>
            </div>
        </>
    );
}

export default Description;
