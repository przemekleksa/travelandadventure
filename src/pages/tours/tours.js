import React from 'react';
import Title from '../../components/titleScreen/title';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import './tours.scss';

import calendar from './img/calendar.png';
import lowtohigh from './img/lowtohigh.png';
import hightolow from './img/hightolow.png';
import name from './img/sort-by-alphabet.png';
import cuba from './img/cuba.jpg';

const Tours = () => {
    return ( 
        
        <div id="tours">
            <Navbar />
            <Title name="Tour Search" />
            <div className="tours">
                <div className="sorting">
                    <div className="sorting-options">
                        <div className="sort-element">
                            <img src={calendar} alt="date" />
                            <div className="sort-option">
                            Date
                            </div> 
                        </div>
                        <div className="sort-element">
                            <img src={lowtohigh} alt="sort price from low to high" />
                            <div className="sort-option">
                            Price low to high
                            </div> 
                        </div>
                        <div className="sort-element">
                            <img src={hightolow} alt="sort price from high to low" />
                            <div className="sort-option">
                            Price high to low
                            </div> 
                        </div>
                        <div className="sort-element">
                            <img src={name} alt="sort a-z" />
                            <div className="sort-option">
                            Name (A-Z)
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="tours-details">
                        <div className="tour-details">
                            <div className="photo">
                                <img src={cuba} alt="cuba" />
                            </div>
                            <div className="tour-text">
                                <h2>Cuba, Havana</h2>
                                <p className="rating">8.6	Superb</p>
                                <p className="desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id ligula aliquam, malesuada ex ac, auctor nibh. Nunc tincidunt lectus finibus dolor porttitor, nec rutrum dui mattis. Sed a accumsan orci. Sed eleifend sollicitudin nisl, eget tempor odio aliquam quis. Praesent rutrum aliquam tellus at congue. Nam id nisi posuere, auctor dolor in, malesuada massa.…
                                </p>
                                <hr />
                                <p className="price">
                                <span>$1870</span> / per person
                                </p>
                                <div className="other-info">
                                    15 days 20+ Explore
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="side">
                        <div className="travel-destination">
                            <h2>Travel Destination</h2>
                            <input type="text" placeholder="Search Tour" />
                            <input type="text" placeholder="Where to?" />
                            <input type="text" placeholder="Month" />
                            <hr />
                            <div className="price-range">
                                <p>Price range</p>
                                <p>$780 - $2830</p>
                            </div>
                            <div className="checkboxes">
                                <label><input type="checkbox" />Explore</label>
                                <label><input type="checkbox" />Vacation</label>
                                <label><input type="checkbox" />Destination</label>
                                <label><input type="checkbox" />Romantic</label>
                                <label><input type="checkbox" />Adventure</label>
                                <label><input type="checkbox" />On budget</label>
                                <label><input type="checkbox" />Popular</label>
                                <label><input type="checkbox" />Holidays</label>
                            </div>
                            <div className="search-button">
                            Search
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            
        </div>
        
        
     );
}
 
export default Tours;