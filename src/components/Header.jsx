import {Star, MenuRounded, Close, Facebook, Instagram, Google, LinkedIn} from "@mui/icons-material"
import { useState } from 'react';
import '../styles/Header.css';

export default function Header(){
    return(
        <div className='Header'>
            <Nav/>
            <Main/>
            <div className='footerList'>
                <Footer subTitles="UI/UX"/>
                <Footer subTitles="DEVLOPNMENT"/>
                <Footer subTitles="PRODUCT DESIGN"/>
                <Footer subTitles="SOCIAL MEDIA DESIGN"/>
                <Footer subTitles="BRANDING"/>
            </div>
        </div>
    )
}

function Nav(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }
    return(
        <div className='Nav'>
            <h1>DA.</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolios</a></li>
                <li><a href="#">Testimonials</a></li>
            </ul>
            <button>Let's Talk.</button>
                {
                    isMenuOpen ? <Close className='menuIcons' onClick={toggleMenu}/> : <MenuRounded className='menuIcons' onClick={toggleMenu}/>
                }
                {
                    isMenuOpen &&
                    <ul className='links'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolios</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <button className='NavBtn'>Let's Talk.</button>
                    </ul>
                }
        </div>
    )
}
function Main(){
    return(
        <div className='Main'>
            <div className='MainContent'>
                <div className="BasicInfo">
                    <h1>HEY, I'M DANNY, A</h1>
                    <h1>CREATIVE <span>UI/UX</span>  DESGINER</h1>
                    <h1>AND A DEVELOPER</h1>
                </div>
                <div className="BasicDetails">
                    <div className='aboutList'>
                        <Star className='startIcon'/>
                        <h3>Designer</h3>
                    </div>
                    <div className='aboutList'>
                        <Star className='startIcon'/>
                        <h3>Figma</h3>
                    </div>
                    <div className='aboutList'>
                        <Star className='startIcon'/>
                        <h3>Developer</h3>
                    </div>
                </div>
                <div className="btns">
                    <button>Want to disscuss?</button>
                    <button>Let's Talk.</button>
                </div>
            </div>
            <div className="BasicContent">
                <div className='ImageContent'></div>
            </div>
        </div>
    )
}
function Footer(props){
    return(
        <div className='H_footer'>
            <Star className='startIcon'/>
            <h2>{props.subTitles}</h2>
        </div>
    )
}