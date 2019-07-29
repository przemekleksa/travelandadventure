import React from 'react';
import jungle from './jungle.jpg';
import turist from './turist.jpg';
import people from './people.jpg';
import boats from './boats.jpg';
import turtle from './turtle.jpg';
import './slider4.scss';


const Slider4 = () => {
    return ( 
        
        <div className="slider4">
            <div className="photo">
                <img src={jungle} alt="thailand" />
                <div className="trip">
                    <div className="title">
                        <p className="destination">Thai island</p>
                        <p className="price"><span>$1100</span>$850</p>
                    </div>
                    <p className="lure">Exploring jungle</p>
                    <p className="description">
                    Go on epic snorkelling adventures, hike up to sublime sunset spots, and dance amongst the fire throwers at all night parties.
                    </p>
                </div>
            </div>
            
            <div className="photo">
                <img src={turist} alt="hiking" />
                <div className="trip">
                    <div className="title">
                        <p className="destination">Hiking</p>
                        <p className="price">$980</p>
                    </div>
                    <p className="lure">Hiking in Iceland</p>
                    <p className="description">
                    Go on epic snorkelling adventures, hike up to sublime sunset spots, and dance amongst the fire throwers at all night parties.
                    </p>
                </div>
            </div>
            <div className="photo">
                <img src={people} alt="people hiking" />
                <div className="trip">
                    <div className="title">
                        <p className="destination">Mountains Hiking</p>
                        <p className="price">$980</p>
                    </div>
                    <p className="lure">Hiking in Mountains</p>
                    <p className="description">
                    Go on epic snorkelling adventures, hike up to sublime sunset spots, and dance amongst the fire throwers at all night parties.
                    </p>
                </div>
            </div>
            <div className="photo">
                <img src={boats} alt="boats on the sea" />
                <div className="trip">
                    <div className="title">
                        <p className="destination">Sealing the seas</p>
                        <p className="price"><span>$1100</span>$900</p>
                    </div>
                    <p className="lure">Explore and Sail</p>
                    <p className="description">
                    Go on epic snorkelling adventures, hike up to sublime sunset spots, and dance amongst the fire throwers at all night parties.
                    </p>
                </div>
            </div>
        
        </div>
     );
}
 
export default Slider4;
