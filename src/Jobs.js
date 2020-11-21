import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import JoblyAPI from './JoblyAPI';

const Jobs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        async function getJobs() {
            let jobs = await JoblyAPI.getJobs();
            setJobs(jobs);
            setIsLoading(false);
        }
        getJobs();
    }, []);
    if (isLoading) {
        return <p>Loading ...</p>
    }
    return (
        <div className="Jobs">
            {jobs.map((job) => (
                <JobCard id={job.id} title={job.title} salary={job.salary} companyHandle={job.companyHandle} key={job.id} />
            ))}
        </div>
    )
}

export default Jobs;