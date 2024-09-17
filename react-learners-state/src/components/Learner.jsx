// import React from 'react';
import Score from './Score.jsx';

function Learner ({learner}) {
    return (
        <div className = "learner">
            <h2>{learner.name}</h2>
            <p>{learner.bio}</p>
            {learner.scores.map((score, index) => (
                <Score key = {index} score = {score} />
            ))}
        </div>
    );
}

export default Learner;