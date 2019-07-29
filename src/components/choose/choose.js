import React from 'react';
import './choose.scss';


const Choose = () => {
    return ( 
        <div className="choose">
            <h2>Choose a Country For Your Next Adventure</h2>
            <p>We Will Inform You When We Have Found Something Special</p>
            <form>
                <select id="continent">
                    <option value=""></option>
                    <option value="eur">Europe</option>
                    <option value="asi">Asia</option>
                    <option value="afr">Africa</option>
                    <option value="aus">Australia</option>
                    <option value="nam">North America</option>
                    <option value="sam">South America</option>
                </select>
                <button>Find now</button>
            </form>
            
        </div>
     );
}
 
export default Choose;