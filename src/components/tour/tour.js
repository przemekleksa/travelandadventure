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
import Info from './information/information';
import Reviews from './reviews/reviews';


class Tour extends Component {
    state = { 
        subpage: "info",
    }

    toggleComponent = (value) => {
        // console.log(value);
        this.setState ({
            subpage: value,
        });
            console.log(this.state.subpage)
    }

    render() {
        return ( 
        
            <div id="tour">
                <Navbar/>
                <Title name="Cuba, Havana" subtitle="Price $1870 / 15 Days"/>
                
            <div className="tour">
                <div className="info-frame">
                    <div className="information">
                        <div className="info-element" onClick={() => this.toggleComponent("info")}>
                            <img src={information} alt="information" />
                            <p>Information</p>
                        </div>
    
                        <div className="info-element" onClick={() => this.toggleComponent("plan")}>
                            <img src={map} alt="tour plan"/>
                            <p>Tour Plan</p>
                        </div>
                        <div className="info-element" onClick={() => this.toggleComponent("location")}>
                            <img src={placeholder} alt="location"/>
                            <p>Location</p>
                        </div>
                        <div className="info-element" onClick={() => this.toggleComponent("gallery")}>
                            <img src={camera} alt="gallery"/>
                            <p>Gallery</p>
                        </div>
                        <div className="info-element" onClick={() => this.toggleComponent("reviews")}>
                            <img src={reviews} alt="reviews"/>
                            <p>Reviews</p>
                        </div>
                    </div>
                
                </div>
                <div className="more">
                    {this.state.subpage === "info" ?
                    <Info/> : this.state.subpage === "reviews" && <Reviews/>}
                </div>
                
                <Footer/>
            </div>
    
            </div>
         );
    }
    
}
 
export default Tour;
