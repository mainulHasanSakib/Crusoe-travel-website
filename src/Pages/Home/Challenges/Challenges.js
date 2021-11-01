import React, { useEffect, useState } from 'react';
import Challenge from './Challenge';

const Challenges = () => {
    const[challenges, setChallenges]=useState([]);
    useEffect(() => {
        fetch('https://vast-inlet-04597.herokuapp.com/challenges')
            .then(res => res.json())
            .then(data => setChallenges(data));
        }, [])
    return (
        <div className="container" id="challenges">
            <h1 className="text-center mt-5 pt-5 text-success fw-bolder"> CHALLENGES</h1>
            <div className="row d-flex">
                {
                challenges.map(challenge => <Challenge
                    key={challenge._id}
                   challenge={challenge}
                > </Challenge>)
            }
            </div>
        </div>
    );
};

export default Challenges;