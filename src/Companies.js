import React, {useState, useEffect} from 'react';
import JoblyAPI from './JoblyAPI';
import CompanyCard from './CompanyCard';

const Companies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        async function getCompanies() {
            let companies = await JoblyAPI.getCompanies();
            setCompanies(companies);
            setIsLoading(false);
        }
        getCompanies();
    }, []);

    if (isLoading) {
        return <p>Loading ...</p>
    }

    return (
        <div className="Companies">
            {companies.map(company => (
                <CompanyCard handle={company.handle} name={company.name} description={company.description} key={company.handle}/>
            ))}
        </div>

    )
}

export default Companies;