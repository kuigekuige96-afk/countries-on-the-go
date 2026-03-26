import { use } from "react";
import { useState } from "react";
import './countries.css';
import Country from "../Country/Country";

export default function Countries({ countriesPromises }) {

     const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);

    const countriesData = use(countriesPromises);

    const countries = countriesData.countries;

    function handleVisitedCountry(country)  {
        setVisitedCountries([...visitedCountries, country]);
    }

    function handleVisitedFlag(flag)  {
        setVisitedFlags([...visitedFlags, flag]);
    }

    return (
        <div>
            <h1 style={{'color':'white'}}>Countries on the world: {countries.length}</h1>

            <h2 style={{'color':'white'}}>Visited Countries: {visitedCountries.length}</h2>

            <h2 style={{'color':'white'}}>Visited Flags: {visitedFlags.length}</h2>

            <div style={{'color':'white'}}>
                {
                    visitedCountries.map((country, index) => (
                        <p  key={index}>{country}</p>
                    ))
                }
            </div>

            <div>
                {
                    visitedFlags.map((flag, index) => (
                        <img key={index} src={flag} alt={`Visited Flag ${index}`} style={{'width':'50px', 'height':'30px', 'marginRight':'5px'}} />
                    ))
                }
            </div>

            <div className="countries">
                {
                    countries.map(country => <Country 
                        key={country.cca3.cca3} 
                        country={country} 
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlag={handleVisitedFlag}
                        />)
                }
            </div>

        </div>
    )
}