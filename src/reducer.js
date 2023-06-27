const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FROM":
            return {
                ...state,
                searchQuery: {
                    ...state.searchQuery,
                    from: action.value,
                },
                showDropdown: {
                    ...state.showDropdown,
                    from: true
                },
                isFrom: true
            }
        case "SET_TO":
            return {
                ...state,
                searchQuery: {
                    ...state.searchQuery,
                    to: action.value,
                },
                showDropdown: {
                    ...state.showDropdown,
                    to: true
                },
                isFrom: false
            }
        case "SET_PASSENGERS":
            return {
                ...state,
                searchQuery: {
                    ...state.searchQuery,
                    passengers: action.value,
                },
            }
        case "SET_CLASS":
            return {
                ...state,
                searchQuery: {
                    ...state.searchQuery,
                    classes: action.value,
                },
            }

        case "SELECT_FROM_AIRPORT":
            return {
                ...state,
                searchQuery: {
                    ...state.searchQuery,
                    from: action.value
                },
                showDropdown: {
                    ...state.showDropdown,
                    from: false
                }
            }
        case "SELECT_TO_AIRPORT":
            return {
                ...state,
                searchQuery: {
                    ...state.searchQuery,
                    to: action.value
                },
                showDropdown: {
                    ...state.showDropdown,
                    to: false
                }
            }
            
        case "SEARCH_FLIGHT":
            return {
                ...state,
                airportCode: {
                    ...state.airportCode,
                    origin: state.searchQuery.from.slice(0, 3),
                    destination: state.searchQuery.to.slice(0, 3)
                },
                previousQuery: {
                    ...state.searchQuery
                },
                showResults: true,
                
            }
        
        case "RESET": 
            return {
                ...state,
                searchQuery: {
                    ...state.searchQuery,
                    from: "",
                    to: "",
                    passengers: "",
                    classes: "",
                }
            }

        case "NEW_SEARCH":
            return {
                ...state,
                searchQuery: {
                    ...state.searchQuery,
                    from: "",
                    to: "",
                    passengers: "",
                    class: ""
                },
                airportCode: {
                    ...state.airportCode,
                    origin: null,
                    destination: null
                },
                showResults: false
            }

        case "HIDE_DROPDOWN":
            return {
                ...state,
                showDropdown: {
                    ...state.showDropdown,
                    from: false,
                    to: false,
                },
            };

        case "HIDE_RESULTS":
            return {
                ...state,
                showResults: false,
            };

        default:
            return state;
    }
}

export default reducer;