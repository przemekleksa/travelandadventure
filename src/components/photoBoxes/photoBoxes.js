import React from 'react';
import './photoBoxes.scss';
import hike from './hike.jpg';
import bali from './bali.jpg';
import beach from './beach.jpg';
import mountain_hike from './mountain_hike.jpg';
import mountain from './mountain.jpg';
import thailand from './thailand.jpg';
import tajmahal from './tajmahal.jpg';
import waterfall from './waterfall.jpg';
import { Link } from 'react-router-dom';


const PhotoBoxes = () => {
    return ( 
            <div className='photo-boxes'>
                
                <div className='box'>
                <Link to="/destinations/mountblanc">
                    
                    <img src={hike} alt="hike" />
                    <div className="box-title">
                        <h3>Spring hiking</h3>
                        <h4>Just Beautiful</h4>
                    </div>
                    </Link>
                </div>
                
                <div className='box'>
                    <img src={mountain_hike} alt="mountain hike" />
                    <div className="box-title">
                        <h3>Mount blanc</h3>
                        <h4>Just Beautiful</h4>
                    </div>

                </div>
                <div className='box'>
                    <img src={bali} alt="bali" />
                    <div className="box-title">
                        <h3>Fiji Island Vacation</h3>
                        <h4>Asia</h4>
                    </div>
                </div>
                <div className='box'>
                    <img src={tajmahal} alt="tajmahal" />
                    <div className="box-title">
                        <h3>Taj Mahal Agra</h3>
                        <h4>India</h4>
                    </div>
                </div>
                <div className='box'>
                    <img src={mountain} alt="mountain" />
                    <div className="box-title">
                        <h3>Mount Blanc</h3>
                        <h4>Different side</h4>
                    </div>

                </div>
                <div className='box'>
                    <img src={bali} alt="bali" />
                    <div className="box-title">
                        <h3>Spring hiking</h3>
                        <h4>Just Beautiful</h4>
                    </div>
                </div>
                <div className='box'>
                    <img src={hike} alt="hike" />
                    <div className="box-title">
                        <h3>Spring hiking</h3>
                        <h4>Just Beautiful</h4>
                    </div>
                </div>
                <div className='box'>
                    <img src={thailand} alt="thailand" />
                    <div className="box-title">
                        <h3>Discover Costa Rica</h3>
                        <h4>Just Beautiful</h4>
                    </div>

                </div>
                <div className='box'>
                    <img src={beach} alt="beach" />
                    <div className="box-title">
                        <h3>Beach in February</h3>
                        <h4>Thailand</h4>
                    </div>
                </div>
            </div>

            
       
     );
}
 
export default PhotoBoxes;