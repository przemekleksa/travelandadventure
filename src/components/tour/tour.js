import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Title from '../titleScreen/title';
import './tour.scss';

import {Link} from 'react-router-dom';

import information from '../../pages/tours/img/information.png';
import map from '../../pages/tours/img/map.png';
import placeholder from '../../pages/tours/img/placeholder.png';
import camera from '../../pages/tours/img/photo-camera.png';
import reviews from '../../pages/tours/img/rating.png';


class Tour extends Component {
    state = { 
        subpage: "info",
    }
    render() {
        return ( 
        
            <div id="tour">
                <Navbar/>
                <Title name="Cuba, Havana" subtitle="Price $1870 / 15 Days"/>
                
            <div className="tour">
                <div className="info-frame">
                    <div className="information">
                        <div className="info-element">
                            <img src={information} alt="information"/>
                            <p>Information</p>
                        </div>
    
                        <div className="info-element">
                            <img src={map} alt="tour plan"/>
                            <p>Tour Plan</p>
                        </div>
                        <div className="info-element">
                            <img src={placeholder} alt="placeholder"/>
                            <p>Location</p>
                        </div>
                        <div className="info-element">
                            <img src={camera} alt="gallery"/>
                            <p>Gallery</p>
                        </div>
                        <div className="info-element">
                            <img src={reviews} alt="reviews"/>
                            <p>Reviews</p>
                        </div>
                    </div>
                
                </div>
                
                <Footer/>
            </div>
    
            </div>
         );
    }
    
}
 
export default Tour;
