import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Challenge = ({challenge}) => {
    const {_id, name, description, place, url } = challenge;
    return (
        <div className="col-md-4 py-3 my-3">
            <Card className="shadow-lg">
            <Card.Img className="topimg" variant="top" src={url} />

        
        <h3 className="text-primary mt-2">{name}</h3>
        <h3 className="text-warning ">{place}</h3>
        
        <p className="p-3">{description}</p>
        <Link to={`/booking/${_id}`}>
            <button className="btn btn-primary my-3">Join for {name.toLowerCase()}</button>
        </Link>
        </Card>
    </div>
    );
};

export default Challenge;