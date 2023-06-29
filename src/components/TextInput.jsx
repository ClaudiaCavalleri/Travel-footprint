import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useUpdateInputs } from "../hooks/useUpdateInputs";
import { useTranslation } from "react-i18next";
import style from "./SearchForm/SearchForm.module.css"
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

const TextInput = ({ isFromInput }) => {
    const { fromInput, toInput, state } = useContext(AppContext);
    const { searchQuery } = state;
    const { updateInputs } = useUpdateInputs();
    const { t } = useTranslation();

    return (
        <div>
            <label>
                <h3>{`${isFromInput ? t("departure") : t("arrival")}`}</h3>
                <div className={style.inputRow}>
                    {isFromInput ? 
                        <FaPlaneDeparture size={30} className={style.icon}/> 
                        : 
                        <FaPlaneArrival size={30} className={style.icon}/>
                    }
                    <input
                    type='text'
                    placeholder={t("placeholder")}
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