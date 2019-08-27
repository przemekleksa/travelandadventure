import React from 'react';

import './tourPlan.scss';

const TourPlan = () => {
    return ( 
        <div className="tour-plan">
            <div className="day-row">
                <div className="day-num">
                    <h2>1</h2>
                </div>
                <div className="day-details">
                    <h2>Day 1: Departure</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra purus vitae venenatis laoreet. Phasellus tincidunt rhoncus rutrum. Mauris a eleifend nisl. Cras ac bibendum massa.</p>
                    <ul>
                        <li>Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie varius est.</li>
                        <li>Suspendisse ultrices nulla eu volutpat volutpat. Proin gravida nibh vel velit auctor aliqueenean.</li>
                        <li>Nunc tincidunt mollis felis, sed bibendum ligula auctor et. Etiam a erat sit amet augue tincidunt euismod.</li>
                    </ul>
                </div>
            </div>
            <div className="day-row">
                <div className="day-num">
                    <h2>2</h2>
                </div>
                <div className="day-details checkmark">
                    <h2>Day 2: Adventure Beggins</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra purus vitae venenatis laoreet. Phasellus tincidunt rhoncus rutrum. Mauris a eleifend nisl. Cras ac bibendum massa.</p>
                    <ul>
                        <li>Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie varius est.</li>
                        <li>Suspendisse ultrices nulla eu volutpat volutpat. Proin gravida nibh vel velit auctor aliqueenean.</li>
                        <li>Nunc tincidunt mollis felis, sed bibendum ligula auctor et. Etiam a erat sit amet augue tincidunt euismod.</li>
                        <li>Proin gravida nibh vel velit auctor aliqueenean sollicitudin, lorem quis bibendum auctor.</li>
                    </ul>
                </div>
            </div>
            <div className="day-row">
                <div className="day-num">
                    <h2>3</h2>
                </div>
                <div className="day-details">
                    <h2>Day 8: Historical Tour</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra purus vitae venenatis laoreet. Phasellus tincidunt rhoncus rutrum. Mauris a eleifend nisl. Cras ac bibendum massa.</p>
                </div>
            </div>
            <div className="day-row">
                <div className="day-num">
                    <h2>4</h2>
                </div>
                <div className="day-details checkmark">
                    <h2>Day 10: Historical Tour</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra purus vitae venenatis laoreet. Phasellus tincidunt rhoncus rutrum. Mauris a eleifend nisl. Cras ac bibendum massa.</p>
                    <ul>
                        <li>Suspendisse ultrices nulla eu volutpat volutpat. Proin gravida nibh vel velit auctor aliqueenean.</li>
                        <li>Nunc tincidunt mollis felis, sed bibendum ligula auctor et. Etiam a erat sit amet augue tincidunt euismod.</li>
                    </ul>
                </div>
            </div>
            <div className="day-row">
                <div className="day-num">
                    <h2>5</h2>
                </div>
                <div className="day-details checkmark">
                    <h2>Day 15: Return</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra purus vitae venenatis laoreet. Phasellus tincidunt rhoncus rutrum. Mauris a eleifend nisl. Cras ac bibendum massa.</p>
                    <ul>
                        <li>Suspendisse ultrices nulla eu volutpat volutpat. Proin gravida nibh vel velit auctor aliqueenean.</li>
                        <li>Nunc tincidunt mollis felis, sed bibendum ligula auctor et. Etiam a erat sit amet augue tincidunt euismod.</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default TourPlan;