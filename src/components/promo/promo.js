import React from 'react';
import percent from './15.png';
import './promo.scss';

const Promo = () => {
    return ( 
        <div className="promo">
            <div className="filter">
            
            </div>
            <div className="percent">
                <img src={percent} alt="15% off" />
            </div>
            <div className="details">
                <h2>Last Minute Offer For You</h2>
                <p className="info">Aerial view of Cape Town with Cape Town Stadium</p>
                <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit felis sit amet turpis vehicula convallis. Ut ac tellus velit. Nulla mollis sollicitudin lacus id ornare. Phasellus laoreet nulla et nulla sagittis, sit amet cursus urna mollis.
                </p>
                <button>Buy now</button>
            </div>
        </div>
     );
}
 
export default Promo;