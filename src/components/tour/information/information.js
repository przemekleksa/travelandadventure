import React from 'react';
import './information.scss';

import clock from '../../../pages/tours/img/clock.png';
import traveler from '../../../pages/tours/img/traveler.png';
import heart from '../../../pages/tours/img/heart.png';

const Info = () => {
    return ( 
        <div id="info">
            <h2>Cuba, Havana</h2>
            <h3>$1870 / per person</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere metus et tortor pulvinar venenatis. Aliquam erat volutpat. Nam ultrices semper felis, at laoreet metus laoreet a. Praesent orci orci, pretium ut tortor euismod, vehicula blandit purus. Aliquam suscipit, erat a maximus mollis, neque odio aliquam arcu, ut consequat leo nisi sit amet leo. Nam consectetur diam id libero fringilla, eu commodo arcu congue.</p>
            <div className="icons">
                <div><img src={clock} alt="clock" /> 15 days</div>
                <div><img src={traveler} alt="traveler" /> 20+</div>
                <div><img src={heart} alt="heart" /> Explore</div>
            </div>
            
            <div className="tour-info">
                <div className="str">
                    Destination
                </div>
                <div className="inf">
                    Cuba
                </div>
            </div>
           
            <div className="tour-info">
                <div className="str">
                Departure
                </div>
                <div className="inf">
                Please arrive by 9:15 AM for a prompt departure at 9:30 AM.
                </div>
            </div>
            
            <div className="tour-info">
                <div className="str">
                Departure Time
                </div>
                <div className="inf">
                Approximately 8:30 PM.
                </div>
            </div>
           
            <div className="tour-info">
                <div className="str">
                    Return Time
                </div>
                <div className="inf">
                Approximately 9:30 PM.
                </div>
            </div>
           
            <div className="tour-info">
                <div className="str">
                Dress Code
                </div>
                <div className="inf">
                Smart Casual or Casual. 	
                </div>
            </div>
          
            <div className="tour-info">
                <div className="str">
                Included
                </div>
                <div className="check">
                    <div>
                    <div><span>&#10004;</span>Accommondation</div>
                    <div><span>&#10004;</span>All Museum Tickets</div>
                    </div>
                </div>
            </div>
           
            <div className="tour-info">
                <div className="str">
                Not Included
                </div>
                <div className="check">
                    <div>
                        <div>
                            <span>&#10006;</span>Meals
                        </div>
                        <div>
                            <span>&#10006;</span>Personal Guide
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>&#10006;</span>Transportation/Car
                        </div>
                        <div>
                            <span>&#10006;</span>Typical Souvenir
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Info;