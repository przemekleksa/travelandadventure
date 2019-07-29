import React from 'react';
import waterfall from './waterfall.jpg';
import girl from './girl.jpg';
import mountains from './mountains.jpg';
import './slider3.scss';


const Slider3 = () => {
    return ( 
        <div className="slider3">
            <div className="photo">
                <img src={waterfall} alt="waterfall" />
                <div className="title">
                    <h3>Marmore Waterfalls</h3>
                    <p>Breathtaking</p>
                </div>
            </div>
            <div className="photo">
                <img src={girl} alt="girl" />
                <div className="title">
                    <h3>Marmore Waterfalls</h3>
                    <p>Breathtaking</p>
                </div>
            </div>
            <div className="photo">
                <img src={mountains} alt="mountains" />
                <div className="title">
                    <h3>Marmore Waterfalls</h3>
                    <p>Breathtaking</p>
                </div>
            </div>
        </div>
     );
}
 
export default Slider3;