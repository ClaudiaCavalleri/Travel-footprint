import React from "react";
import style from "./Dropdown.module.css";
import { nanoid } from "nanoid";
import { ThreeDots } from 'react-loader-spinner'

const Dropdown = ({
    isFromInput,
    airportInfo,
    selectAirport,
    loaded,
    styleDropdown
}
) => {
    if (!loaded) {
        return (
            <ul
                id={isFromInput ? "fromHints" : "toHints"}
                className={style.dropdown}
                style={styleDropdown}
            >
                <ThreeDots 
                    height="40" 
                    width="40" 
                    radius="6"
                    color="#4C3470"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{justifyContent: "center"}}
                    wrapperClassName=""
                    visible={true}
                />
            </ul>
        );
    }
 
    if (airportInfo.length < 1) {
        return (
            <ul
                id={isFromInput ? "fromHints" : "toHints"}
                className={style.dropdown}
                style={styleDropdown}
            >
                <li>No results</li>
            </ul>
        );
    }

    return (
        <ul
            id={isFromInput ? "fromHints" : "toHints"} 
            className={style.dropdown}
            style={styleDropdown}
        >
        {airportInfo.map((item) => {
            return (
            <li key={nanoid()} onClick={selectAirport}>
                {item.code} - {item.name}, {item.city} ({item.country})
            </li>
            );
        })}
        </ul>
    );
};

export default Dropdown;