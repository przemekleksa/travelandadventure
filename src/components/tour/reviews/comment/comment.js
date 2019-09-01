import React from 'react';
import user from './user.png';
import './comment.scss';

const Comment = (props) => {
    return ( 
        <div className="comment">
            <div className="user-photo">
                <img src={user} alt="" />
            </div>
            <div className="comment-details">
                <h2>{props.user}</h2>
                <h4>{props.date}</h4>
                <p>{props.text}</p>
            </div>
        </div>
     );
}
 
export default Comment;