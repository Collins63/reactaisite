import { useEffect } from "react";

export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      // If ref is not set or click is inside the element, do nothing
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      // Click is outside, call the callback
      callback(event);
    };

    // Listen for mouse and touch events
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup on unmount
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
