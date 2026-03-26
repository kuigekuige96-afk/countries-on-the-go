import { use } from "react";
import { useState } from "react";
import './countries.css';
import Country from "../Country/Country";

export default function Countries({ countriesPromises }) {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const countriesData = use(countriesPromises);
    const countries = countriesData?.countries ?? [];

    function handleVisitedCountry(country) {
        if (!country) return;
        setVisitedCountries((prev) => (prev.includes(country) ? prev : [...prev, country]));
    }

    function handleVisitedFlag(flag) {
        if (!flag) return;
        setVisitedFlags((prev) => (prev.includes(flag) ? prev : [...prev, flag]));
    }

    return (
        <div>
            <h1 style={{'color':'white'}}>Countries on the world: {countries.length}</h1>

            <h2 style={{'color':'white'}}>Visited Countries: {visitedCountries.length}</h2>

            <h2 style={{'color':'white'}}>Visited Flags: {visitedFlags.length}</h2>

            <div style={{'color':'white'}}>
                {visitedCountries.map((country) => (
                    <p key={country}>{country}</p>
                ))}
            </div>

            <div>
                {visitedFlags.map((flag) => (
                    <img
                        key={flag}
                        src={flag}
                        alt={'Visited Flag'}
                        style={{'width':'50px', 'height':'30px', 'marginRight':'5px'}}
                    />
                ))}
            </div>

            <div className="countries">
                {countries.map((country, index) => (
                    <Country
                        key={country?.cca3?.cca3 ?? country?.cca3 ?? index}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlag={handleVisitedFlag}
                    />
                ))}
            </div>

        </div>
    );
}