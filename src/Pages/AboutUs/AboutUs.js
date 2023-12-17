import React from 'react';
import Header from "../../compoments/Header";
import Footer from "../../compoments/Footer";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './AboutUs.css'

class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="about-us-container">
                    <div className="about-us-content">
                        <h2>О нас</h2>
                        <p>Мы - команда энтузиастов, преданных стилю и классике мужской моды. В мире постоянно меняющихся трендов и модных экспериментов, мы придерживаемся убеждения, что настоящий стиль вечен.</p>
                        
                        <p>Наш магазин был основан с одной целью - предложить изысканные, качественные и стильные классические костюмы для современного мужчины. Мы стремимся сделать ваше погружение в мир элегантности простым и приятным.</p>
                      
                        <p>Наша коллекция представляет широкий спектр классических костюмов, от традиционных линий до современных интерпретаций. Мы уделяем особое внимание качеству материалов и мастерству изготовления, чтобы каждый наш костюм приносил уверенность и стиль своему обладателю.</p>

                        <div className="social-icons">
                            <a href="facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a href="twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a href="instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="about-us-image">
                        <img src="https://provokatorspb.ru/public/upload/images_min/IMG_0381.jpg" alt="О нас" />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default AboutUs;
