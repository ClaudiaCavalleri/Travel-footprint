import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { LanguageContext } from "../context/LanguageContext";
import { useUpdateInputs } from "../hooks/useUpdateInputs";
import style from "./SearchForm/SearchForm.module.css"
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

const TextInput = ({ isFromInput }) => {
    const { fromInput, toInput, state } = useContext(AppContext);
    const { searchQuery } = state;
    const { updateInputs } = useUpdateInputs();

    const { translation, language } = useContext(LanguageContext);
    const { english, italian } = translation;

    return (
        <div>
            <label>
                <h3>{`${isFromInput ? 
                    language === "english" ? english.departure : italian.departure
                    : 
                    language === "english" ? english.arrival : italian.arrival}
                    `}
                </h3>
                <div className={style.inputRow}>
                    {isFromInput ? 
                        <FaPlaneDeparture size={30} className={style.icon}/> 
                        : 
                        <FaPlaneArrival size={30} className={style.icon}/>
                    }
                    <input
                    type='text'
                    placeholder={isFromInput ? 
                        language === "english" ? english.placeholderDep : italian.placeholderDep
                        :
                        language === "english" ? english.placeholderArr : italian.placeholderArr
                    }
                    className="input-item"
                    name={isFromInput ? "From" : "To"}
                    value={isFromInput ? searchQuery.from : searchQuery.to}
                    ref={isFromInput ? fromInput : toInput}
                    required
                    onChange={updateInputs}
                    />
                </div>
            </label>
        </div>
    );
};

export default TextInput;