import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";
import style from "./SearchForm/SearchForm.module.css"
import { FaUserFriends } from "react-icons/fa";

const NumberInput = ({ handleChange }) => {
    const { state } = useContext(AppContext);
    const { searchQuery } = state;
    const { t } = useTranslation();

    return (
        <div>
            <label>
                <h3>{t("passengers")}</h3>
                <div className={style.inputRow}>
                    <FaUserFriends size={30} className={style.icon}/>
                    <input
                        type="number"
                        placeholder={t("placeholderPass")}
                        name="Passengers"
                        min={1}
                        value={searchQuery.passengers}
                        required
                        onChange={handleChange}
                    />
                </div>
            </label>
        </div>
    );
};

export default NumberInput;