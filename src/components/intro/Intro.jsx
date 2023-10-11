import Btn from '../btn/Btn';
import introImg from './../../img/images/header-img.jpg'
import './intro.css'

function Intro () {
    return (
        <>
        <div className="intro">
            <div className='intro_inner'>
                <div className='intro_left'>
                    <h1 className='intro_title'><span className='white_title_bg'>LET’S</span> EXPLORE <span className='yellow_title_bg'>UNIQUE</span> CLOTHES.</h1>
                    <p className='intro_text'>Live for Influential and Innovative fashion!</p>
                    <div className='elipse elipse--intro'></div>
                    <Btn className="btn intro_btn" text="Shop Now"/>
                </div>
                <div className='intro_right'>
                    <img className='intro-img' src={introImg} alt="introImg" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Intro;