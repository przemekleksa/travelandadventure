import React from 'react';
import './reviews.scss';
import Score from './score/score';
import Comment from './comment/comment';

const Reviews = () => {
    return ( 
        <div id="reviews">
            <Score score="8.6" comm="Superb" acco={8} meals={8} overall={9} transport={10} value={8}/>

            <hr />
            <Comment user="Lily" date="August 18, 2017 at 9:36 am" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis congue varius. In mattis eros ullamcorper orci rutrum, nec congue est egestas. Maecenas quis mattis purus. Phasellus interdum aliquam luctus."            />
        </div>
     );
}
 
export default Reviews;
