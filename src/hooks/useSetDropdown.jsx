import { useContext, useEffect, useState} from "react";
import { AppContext } from "../context/AppContext";

export const useSetDropdown = (isFrom) => {
  const { fromInput, toInput, state, dispatch } = useContext(AppContext);
  const { showDropdown } = state;

  const [dropdownPosition, setDropdownPosition] = useState({
    top: "",
    left: "",
    right: "",
  });

  // Set dropdowns' positions based on inputs position
  useEffect(() => {
    const element = isFrom ? fromInput : toInput;

    const setPosition = () => {
      const elementRect = element.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      
      setDropdownPosition({
        top: elementRect.bottom + scrollTop,
        left: elementRect.left,
        right: elementRect.right,
      });
    };
    

    setPosition();
    window.addEventListener("resize", setPosition);
    window.addEventListener("scroll", setPosition);

    return () => {
      window.removeEventListener("resize", setPosition);
      window.removeEventListener("scroll", setPosition);
    }
    // eslint-disable-next-line 
  }, [isFrom]);

  // Dropdown style
  const styleDropdown = {
    top: `${dropdownPosition.top}px`,
    left: `${dropdownPosition.left}px`,
    right: `${window.innerWidth - dropdownPosition.right}px`,
  };

  // Hide dropdown when user clicks elsewhere
  useEffect(() => {
    const hideDropdown = (e) => {
      if (e.target.name !== "From" && e.target.name !== "To") {
        dispatch({ type: "HIDE_DROPDOWN" });
      }
    };

    // Add event listener only if dropdown is showing
    if (showDropdown.from || showDropdown.to) {
      document.addEventListener("click", hideDropdown);
    }

    return () => document.removeEventListener("click", hideDropdown);
    // eslint-disable-next-line 
  }, []);

  return { styleDropdown };
};