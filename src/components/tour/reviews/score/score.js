import React from 'react';
import './score.scss';

const Score = (props) => {
    // let acco = {
        
    // }
    let divStyle = {
        width: '80%'
        // backgroundImage: 'url(' + imgUrl + ')',
        // WebkitTransition: 'all', // note the capital 'W' here
        // msTransition: 'all' // 'ms' is the only lowercase vendor prefix
      };
    return ( 
        <div className="score">
                <div className="overall-score">
                    <div>{props.score}</div>
                    <div>{props.comm}</div>
                </div>
                <div className="score-details">
                    <div className="accommodation">
                        <div style={divStyle}>
                            Accommodation<span>{props.acco.toFixed(1)}</span>
                        </div>
                    </div>
                    <div className="meals">
                        <div>
                            Meals<span>{props.meals.toFixed(1)}</span>
                        </div>
                    </div>
                    <div className="overall">
                        <div width={props.overall}>
                            Overall<span>{props.overall.toFixed(1)}</span>
                        </div>
                    </div>
                    <div className="transport">
                        <div>
                            Transport<span>{props.transport.toFixed(1)}</span>
                        </div>
                    </div>
                    <div className="value">
                        <div>
                            Value<span>{props.value.toFixed(1)}</span>
                        </div>
                    </div>
                </div>
        </div>

     );
}
 
export default Score;

