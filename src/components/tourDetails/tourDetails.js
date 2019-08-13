import React from 'react';
import './tourDetails.scss';

import heart from './img/heart.png';
import traveler from './img/traveler.png';
import clock from './img/clock.png';

const TourDetails = (props) => {
    return ( 
        <div className="tour-details">
            <div className="photo">
                <img src={props.img} alt="india" />
                </div>
                <div className="tour-text">
                    <h2>{props.dest}</h2>
                    <p className="rating">{props.rating}</p>
                    <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id ligula aliquam, malesuada ex ac, auctor nibh. Nunc tincidunt lectus finibus dolor porttitor, nec rutrum dui mattis. Sed a accumsan orci. Sed eleifend sollicitudin nisl, eget tempor odio aliquam quis. Praesent rutrum aliquam tellus at congue. Nam id nisi posuere, auctor dolor in, malesuada massa.…
                    </p>
                    <hr />
                    <p className="price">
                    {props.oldprice &&
                        <><span className="old-price">${props.oldprice}</span><span> </span></>
                    }
                    <span>${props.price}</span> / per person
                    </p>
                    <div className="other-info">
                        <img src={clock} alt="clock"/><p>{props.clock} days</p> 
                        <img src={traveler} alt="traveler" /><p>{props.traveler}+</p> 
                        <img src={heart} alt="heart"/><p>Explore</p>
                    </div>
            </div>
        </div>
     );
}
 
export default TourDetails;