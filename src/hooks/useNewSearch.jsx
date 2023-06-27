import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useNewSearch = (searchBox) => {
    const { dispatch } = useContext(AppContext);

    const scrollToSearch = () => {
        setTimeout(() => {
          searchBox.current.scrollIntoView({ behavior: "smooth" });
        }, 0);
    };

    // Delete fields for a new search
    const newSearch = (e) => {
        e.preventDefault();
        dispatch({ type: "NEW_SEARCH" });
        scrollToSearch();
    };

    return { newSearch };
};