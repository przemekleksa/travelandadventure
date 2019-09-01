import React from 'react';
import './reviews.scss';
import Score from './score/score';

const Reviews = () => {
    return ( 
        <div id="reviews">
            <Score score="8.6" comm="Superb" acco={8} meals={8} overall={9} transport={10} value={8}/>
        </div>
     );
}
 
export default Reviews;
