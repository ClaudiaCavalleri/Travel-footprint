import { useContext } from "react";
import { nanoid } from "nanoid";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";
import style from "./SearchForm/SearchForm.module.css";
import { LuMartini } from "react-icons/lu";

const SelectInput = ({ handleChange }) => {
    const { classes, state } = useContext(AppContext);
    const { searchQuery } = state;
    const { t } = useTranslation();

    return (
        <div >
            <label>
                <h3>{t("class")}</h3>
                <div className={style.inputRow}>
                    <LuMartini size={30} className={style.icon}/>
                    <select
                        name="Classes"
                        className={style.classInput}
                        value={searchQuery.classes}
                        required
                        onChange={handleChange}
                    >
                        <option>{t("choose")}</option>
                        <hr/>
                        {classes.map((classes) => {
                            return(
                                <option key={nanoid()} value={classes.name}>
                                    {classes.name === "premium_economy" ? "Premium Economy" : classes.name[0].toUpperCase() + classes.name.slice(1)}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </label>
        </div>
    );
};

export default SelectInput;