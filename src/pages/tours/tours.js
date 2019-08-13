import React from 'react';
import Title from '../../components/titleScreen/title';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import TourDetails from '../../components/tourDetails/tourDetails';
import './tours.scss';

import calendar from './img/calendar.png';
import lowtohigh from './img/lowtohigh.png';
import hightolow from './img/hightolow.png';
import name from './img/sort-by-alphabet.png';

import cuba from './img/cuba.jpg';
import mountainlake from './img/mountainlake.jpg';
import sailing from './img/sailing.jpg';
import india from './img/india.jpg';
import china from './img/china.jpg';

import lastminute from './img/lastminute.jpg';




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
                        <TourDetails dest="Cuba, Havana" img={cuba} 
                        rating="8.6	Superb" price="1870"
                        clock="15" traveler="20"
                        />
                        <TourDetails dest="Peyto Lake of Banff" img={mountainlake} 
                        rating="9.0 Superb" price="2730" oldprice="2830"
                        clock="10" traveler="31"
                        />
                        <TourDetails dest="Sailing, Pacific" img={sailing} 
                        rating="7.0 Good" price="1200 "
                        clock="15" traveler="36"
                        />
                        <TourDetails dest="India Is For Everyone" img={india} 
                        rating="8.0 Awesome" price="1350"
                        clock="18" traveler="3"
                        />
                        <TourDetails dest="China" img={china} 
                        rating="7.2 Good" price="2830"
                        clock="10" traveler="13"
                        />
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
                            <img src={lastminute} alt="last minute"/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            
        </div>
        
        
     );
}
 
export default Tours;