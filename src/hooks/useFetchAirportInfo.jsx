import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

export const useFetchAirportInfo = (isFromInput) => {
    const { state } = useContext(AppContext);
    const { searchQuery, showDropdown } = state;

    const [airportInfo, setAirportInfo] = useState([]);
    const [airportInfoLoaded, setAirportInfoLoaded] = useState(false);

    const query = isFromInput ? searchQuery.from : searchQuery.to;
    const capitalizedQuery = query.charAt(0).toUpperCase() + query.slice(1);

    const isDropdownShowing = isFromInput ? showDropdown.from : showDropdown.to;

    const airportURL = "https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json"

    
    useEffect(() => {
        
        const fetchAirportInfo = async () => {
            const response = await axios.get(airportURL);

            const filterByCity = response.data.filter((el) => el.city.startsWith(capitalizedQuery));
            const filterByCountry = response.data.filter((el) => el.country.startsWith(capitalizedQuery));
            let filteredResponse;

            setAirportInfo(
                filteredResponse = filterByCity.concat(filterByCountry)
            );

            setAirportInfoLoaded(true)
            console.log(filteredResponse)
        } 
        if (isDropdownShowing) {
            setAirportInfoLoaded(false);
            fetchAirportInfo();
        }
    }, [query, capitalizedQuery, isDropdownShowing])

    return { airportInfo, airportInfoLoaded };
}