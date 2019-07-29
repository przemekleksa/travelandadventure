import React from 'react';
import './title.scss';

const Title = (props) => {
    return ( 
        <div className="title">
            <h1>{props.name}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
            
        </div>
     );
}
 
export default Title;