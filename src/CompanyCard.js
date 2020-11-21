import React from 'react';
import { Link } from 'react-router-dom';

const CompanyCard = ( {handle, name, description} ) => {
    return (
        <div className="CompanyCard" style={{border:"1px solid grey", width:"80%", margin:"20px"}}>
            <Link to={`/companies/${handle}`}>
                <h4>{name}</h4>
            </Link>
            <p>{description}</p>
        </div>
    )
}

export default CompanyCard;