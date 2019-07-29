import React from 'react';
import buddists from './buddists.jpg';
import fields from './fields.jpg';
import india from './india.jpg';
import kayak from './kayak.jpg';
import nordickwalking from './nordickwalking.jpg';
import './slider5.scss';

const Slider5 = () => {
    return ( 
        <div className="slider5">
            <div className="big-pic">
                <img src={fields} alt="" />
            </div>
            <div className="collage">
                <div className="row">
                    <div className="tile">
                        <img src={buddists} alt="buddists" />
                    </div>
                    <div className="tile">
                        <img src={nordickwalking} alt="nordickwalking" />
                    </div>
                </div>
                <div className="row">
                    <div className="tile">
                        <img src={india} alt="india" />
                    </div>
                    <div className="tile">
                        <img src={kayak} alt="kayak" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Slider5;