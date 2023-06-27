import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useUpdateInputs = () => {
    const { dispatch } = useContext(AppContext);
    
    function updateInputs(e) {
        if (e.target.name === "From") {
            dispatch({ type: "SET_FROM", value: e.target.value });
        } else if (e.target.name === "To") {
            dispatch({ type: "SET_TO", value: e.target.value });
        } else if (e.target.name === "Passengers") {
            dispatch({ type: "SET_PASSENGERS", value: e.target.value });
        } else if (e.target.name === "Classes") {
            dispatch({ type: "SET_CLASS", value: e.target.value });
        } else if (e.target.id === "ResetButton") {
            dispatch({ type: "RESET",  });
        }
    };
    return { updateInputs };
};
