import React from 'react';
import Title from '../../../components/titleScreen/title';
import Navbar from '../../../components/navbar/navbar';
import './mountBlanc.scss';
import Specs from '../../../components/specs/specs';



const MountBlanc = () => {
    return ( 
        <div id="mount-blanc">
            
            <Navbar/>
                <Title name="Mount Blanc" />
            
            <div className="content">
            <Specs />
            </div>
            
        </div>
     );
}
 
export default MountBlanc;