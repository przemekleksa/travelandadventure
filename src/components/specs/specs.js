import React from 'react';
import './specs.scss';
import animal from './animal.jpg';
import top from './top.jpg';
import d1 from './d1.jpg';
import d2 from './d2.jpg';
import d3 from './d3.jpg';
import d4 from './d4.jpg';
import d5 from './d5.jpg';
import d6 from './d6.jpg';
import d7 from './d7.jpg';
import d8 from './d8.jpg';
import d9 from './d9.jpg';
import search from './search.png';
import lastminute from './lastminute.jpg';
import iggal from './insta.png';

import Footer from '../footer/footer';


const Specs = () => {
    return ( 
        <>
        <div className="specs">
            <div className="main">
                <h2>Tour du Mont Blanc</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur neque elit quis nunc.
                <br /><br />
                Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.
                </p>
                <div className="pics">
                    <img src={animal} alt="animal" />
                    <img src={top} alt="top" />

                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretium est. Nullam ac justo efficitur, tristique ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et tellus nec, maximus viverra metus. Nullam elementum nibh nec pellentesque finibus. Suspendisse laoreet velit at eros eleifend, a pellentesque urna ornare. In sed viverra dui. Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor.
                <br /><br />
                Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida.
                </p>
                <h2>Good to Know</h2>
                <hr />
                <div className="row">
                    <div className="info">
                    Country
                    </div>
                    <div className="details">
                    Italy and France
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="info">
                    Visa Requirements
                    </div>
                    <div className="details">
                    Visa in not needed for EU. Everyone else needs a visa.
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="info">
                    Languages spoken
                    </div>
                    <div className="details">
                    italian and french
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="info">
                    Currency used
                    </div>
                    <div className="details">
                    Euro and Franc
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="info">
                    Area (km2)
                    </div>
                    <div className="details">
                    45
                    </div>
                </div>
                <h2>Municipalities</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretium est. Nullam ac justo efficitur, tristique ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et tellus nec, maximus viverra metus. Nullam elementum nibh nec pellentesque finibus. Suspendisse laoreet velit at eros eleifend, a pellentesque urna ornare. In sed viverra dui. Nam sed lobortis ante, sit amet mattis purus. Nunc tincidunt mollis felis, sed bibendum ligula auctor et.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretium est. Nullam ac justo efficitur, tristique ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et tellus nec, maximus viverra metus. Nullam elementum nibh nec pellentesque finibus lorem eros vestibulum turpis, ac condimentum erat.</p>

                <div className="travel-photos">
                    <img src={d1} alt="canions" />
                    <img src={d2} alt="canions" />
                    <img src={d3} alt="canions" />
                    <img src={d4} alt="canions" />
                    <img src={d5} alt="canions" />
                    <img src={d6} alt="canions" />
                    <img src={d7} alt="canions" />
                    <img src={d8} alt="canions" />
                    <img src={d9} alt="canions" />
                </div>
            </div>
            <div className="side">
                <div className="search">
                    <input type="text" placeholder="Search..."/>
                    <div className="search-icon">
                        <img src={search} alt="search" />
                    </div>
                </div>
                <div className="last-minute">
                <img src={lastminute} alt="last minute offer"/>
                </div>
                <div className="ig-gal">
                <h3>Instagram Gallery</h3>
                    <img src={iggal} alt="photos from instagram" />
                </div>
            </div>
            
        </div>
        <Footer />
        </>
     );
}
 
export default Specs;