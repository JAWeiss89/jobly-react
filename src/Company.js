import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import JoblyAPI from './JoblyAPI';
import JobCard from './JobCard';

// Currently not handling error when company not found

const Company = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [company, setCompany] = useState(null);

    const {handle} = useParams();

    useEffect(() => {
        async function getCompany() {
            let company = await JoblyAPI.getCompany(handle);
            setCompany(company);
            setIsLoading(false);
        }
        getCompany();
    }, [handle]);
    
    if (isLoading) {
        return <p>Loading ...</p>
    }

    return (
        <div>
            <h2>{company.name}</h2>
            <h3>{company.description}</h3>
            <h3>Jobs:</h3>
            {company.jobs.map((job)=> (
                < JobCard key={job.id} id={job.id} title={job.title} salary={job.salary} />
            ))}
        </div>
    )
}

export default Company;