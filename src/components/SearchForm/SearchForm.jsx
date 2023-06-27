import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { LanguageContext } from "../../context/LanguageContext";
import style from "./SearchForm.module.css";

import TextInput from '../TextInput';
import NumberInput from '../NumberInput';
import SelectInput from '../SelectInput';
import Dropdown from '../Dropdown/Dropdown';

export default function SearchForm ({
    updateInputs,
    airportInfo,
    airportInfoLoaded,
    selectAirport,
    styleDropdown,
    searchFlight,
}) {

    const { state } = useContext(AppContext);
    const { searchQuery, showDropdown } = state;
    
    const { translation, language } = useContext(LanguageContext);
    const { english, italian } = translation;
    
    

    return (
        <main>
            <form className={style.searchForm}>
                <div className={style.airportsInputContainer}>
                    <TextInput 
                        isFromInput={true}
                        handleChange={updateInputs}
                    />
                    {showDropdown.from && searchQuery.from.length > 0 && (
                        <Dropdown 
                        isFromInput={true}
                        airportInfo={airportInfo}
                        selectAirport={selectAirport}
                        loaded={airportInfoLoaded}
                        styleDropdown={styleDropdown}
                        />
                    )}
                    <TextInput 
                        isFromInput={false}
                        handleChange={updateInputs}
                    />
                    {showDropdown.to && searchQuery.to.length > 0 && (
                        <Dropdown 
                        isFromInput={false}
                        airportInfo={airportInfo}
                        selectAirport={selectAirport}
                        loaded={airportInfoLoaded}
                        styleDropdown={styleDropdown}
                        />
                    )}
                </div>
     
                <div>
                    <NumberInput 
                        handleChange={updateInputs}
                    />
                    <SelectInput 
                        handleChange={updateInputs}
                    />
                </div>
                <div className={style.btnContainer}>
                    <button id={style.ResetButton} onClick={updateInputs}>
                        Reset
                    </button>
                    <button 
                        id={style.showFootprintButton} 
                        onClick={searchFlight}
                    >
                        {`${language === "english" ? english.showFootprint : italian.showFootprint}`}
                    </button>
                </div>
            </form>
        </main>
    )
}