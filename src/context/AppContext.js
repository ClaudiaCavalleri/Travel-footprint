import React, { createContext, useReducer, useRef } from "react";
import initialState from "../initialState";
import reducer from "../reducer";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const classes = [
        {
            id: 0,
            name: "economy",
            selected: false
        },
        {
            id: 1,
            name: "premium_economy",
            selected: false
        },
        {
            id: 2,
            name: "business",
            selected: false
        },
        {
            id: 3,
            name: "first",
            selected: false
        }
    ]

    const fromInput = useRef(null);
    const toInput = useRef(null);

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <AppContext.Provider value={{classes, state, dispatch, reducer, fromInput, toInput}}>
            {children}
        </AppContext.Provider>
    )
}