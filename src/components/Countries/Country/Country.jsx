import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // setVisited(true);
        setVisited(!visited);
    }

    // console.log(handleVisitedCountries)
    // const passWithParams = () => handleVisitedCountries(country)

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2>Name : {name?.common}</h2>
            <img src={flags?.png} alt="" style={{height: '200px', width: '350px'}}/>
            <h4>Population : {population}</h4>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={()=>handleVisitedCountries(country)} style={{background: 'gray', marginBottom: '5px'}}>Mark Visited</button> <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)} style={{background: 'gray', marginBottom: '5px'}}>Add Flag</button> <br />
            <button onClick={handleVisited} style={{background: 'gray'}}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country.' : 'I want to visit this country.'}
        </div>
    );
};

export default Country;