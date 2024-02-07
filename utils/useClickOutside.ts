import React, { useEffect } from "react";

export const useClickOutside = (
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
  setToggleState: React.Dispatch<React.SetStateAction<boolean>>,
  toggleState: boolean
) => {
  useEffect(() => {
    const listener = (event: TouchEvent | MouseEvent) => {
      if (containerRef?.current === event.target) {
        setToggleState(toggleState);
      }
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
      document.removeEventListener("click", listener);
    };
  }, [containerRef, setToggleState, toggleState]);
};
