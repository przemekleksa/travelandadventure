import React from 'react';
import './destinations.scss';
import Title from '../../components/titleScreen/title';
import PhotoBoxes from '../../components/photoBoxes/photoBoxes';
import Footer from '../../components/footer/footer';

import Navbar from '../../components/navbar/navbar';

const Destinations = () => {
    return ( 
        
        <div id="destinations">
            
                <Navbar />
                <Title name="Destinations" subtitle="Modern & Beautiful WordPress Theme for all Kinds of Travel and Tourism Busines."/>
            
        
            <div className="destination-boxes">
                <PhotoBoxes />
                <Footer />
            </div>
            
        </div>
     );
}
 
export default Destinations;