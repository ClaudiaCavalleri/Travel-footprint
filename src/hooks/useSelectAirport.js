import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useSelectAirport = () => {
    const { dispatch } = useContext(AppContext);

    const selectAirport = (e) => {
        if (e.target.parentNode.id === "fromHints") {
            dispatch({ type: "SELECT_FROM_AIRPORT", value: e.target.innerText });
        } else if (e.target.parentNode.id === "toHints") {
            dispatch({ type: "SELECT_TO_AIRPORT", value: e.target.innerText });
        }
    };

    return { selectAirport };
};