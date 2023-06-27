import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

export const useFetchFootprint = () => {
    const { state, dispatch } = useContext(AppContext);
    const { searchQuery, airportCode } = state;

    const [footprint, setFootprint] = useState(null);
    const [totalFootprint, setTotalFootprint] = useState(null);


    useEffect(() => {
        const footprintURL = `https://api.goclimate.com/v1/flight_footprint?segments[0][origin]=${airportCode.origin}&segments[0][destination]=${airportCode.destination}&cabin_class=${searchQuery.classes}&&currencies[]=EUR`; 
        
        const requestFootprint = async () => {
            try {
                const response = await axios.get(footprintURL, {
                    auth: { username: process.env.REACT_APP_GOCLIMATE_API_KEY },
                });
                setFootprint(response.data.footprint);
                setTotalFootprint(
                    (response.data.footprint) * (state.searchQuery.passengers)
                );
            } catch (error) {
                console.log(error)
                console.log(error.response.status)

                if (error.response) {
                    // Request made but the server responded with an error
                    dispatch({ type: "HIDE_RESULTS" });
                } else if (error.request) {
                    // Request made but no response is received from the server.
                    dispatch({ type: "HIDE_RESULTS" });
                } else {
                    // Error occured while setting up the request
                    dispatch({ type: "HIDE_RESULTS" });
                }
            }
        } 
        requestFootprint();

        // eslint-disable-next-line 
    }, [airportCode.origin, airportCode.destination]);

    return { footprint, totalFootprint };
};