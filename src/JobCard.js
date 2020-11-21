import React from 'react';
import {Link} from 'react-router-dom';

const JobCard = ( {id, title, salary, companyHandle} ) => {
    return (
        <div className="JobCard" style={{border:"1px solid grey", width:"80%", margin:"20px"}}>
            <p>Req. ID: {id}</p>
            <p><strong>{title}</strong></p>
            <p>salary:{salary}</p>
            <Link to={`/companies/${companyHandle}`}>
                <p>{companyHandle}</p>
            </Link>
            
            <button>Apply!</button>
        </div>
    )
}

export default JobCard;