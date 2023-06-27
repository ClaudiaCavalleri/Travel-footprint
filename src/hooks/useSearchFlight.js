import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useSearchFlight = (resultsBox) => {
    const { dispatch } = useContext(AppContext);

    const scrollToResults = () => {
        setTimeout(() => {
          resultsBox.current.scrollIntoView({ behavior: "smooth" });
        }, 0);
    };

    const searchFlight = (e) => {
        e.preventDefault();
        dispatch({ type: "SEARCH_FLIGHT" });
        scrollToResults();
    };

    return { searchFlight, scrollToResults };
};