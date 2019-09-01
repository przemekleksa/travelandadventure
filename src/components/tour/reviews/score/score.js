import React from 'react';
import './score.scss';

const Score = (props) => {

      const widthAcco = props.acco*10;
      const widthMeals = props.meals*10;
      const widthOverall = props.overall*10;
      const widthTransport = props.transport*10;
      const widthValue = props.value*10;

    return ( 
        <div className="score">
                <div className="overall-score">
                    <div>{props.score}</div>
                    <div>{props.comm}</div>
                </div>
                <div className="score-details">
                    <div className="accommodation">
                        <div style={{ width: widthAcco + '%' }}>
                            Accommodation<span>{props.acco.toFixed(1)}</span>
                        </div>
                    </div>
                    <div className="meals">
                        <div style={{ width: widthMeals + '%' }}>
                            Meals<span>{props.meals.toFixed(1)}</span>
                        </div>
                    </div>
                    <div className="overall">
                        <div style={{ width: widthOverall + '%' }}>
                            Overall<span>{props.overall.toFixed(1)}</span>
                        </div>
                    </div>
                    <div className="transport">
                        <div style={{ width: widthTransport + '%' }}>
                            Transport<span>{props.transport.toFixed(1)}</span>
                        </div>
                    </div>
                    <div className="value">
                        <div style={{ width: widthValue + '%' }}>
                            Value<span>{props.value.toFixed(1)}</span>
                        </div>
                    </div>
                </div>
        </div>

     );
}
 
export default Score;

