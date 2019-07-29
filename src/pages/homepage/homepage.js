import React from 'react';
import './homepage.scss';
import Form from '../../components/form/form';
import arrowDown from '../homepage/down-arrow.png';
import Slider4 from '../../components/slider4/slider4';
import Promo from '../../components/promo/promo';
import Slider5 from '../../components/slider5/slider5';
import Choose from '../../components/choose/choose';
import Slider3 from '../../components/slider3/slider3';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';

const Homepage = () => {
    return ( 
        <>
         <Navbar />
            <div className="slider">
                <div className="greetings">
                    <h2>Find Excitement Wherever You May Roam</h2>
                    <h1>A Time to Travel and Relax</h1>
                   
                </div>
                <div class="scroll">
                        <h4>Scroll down</h4>
                        <a href="#rest">
                            <img src={arrowDown} alt="arrow down" />
                        </a>
                    </div>
            </div>
            <div className="rest" id="rest"> 
                <Form />
                <Slider4 />
                <Promo />
                <Slider5 />
                <Choose />
                <Slider3 />
                <Footer />
            </div>
        </>
     );
}
 
export default Homepage;