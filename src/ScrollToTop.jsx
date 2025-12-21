import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "0, 0" means top left coordinates of the window
    window.scrollTo(0, 0);
  }, [pathname]); // This runs every time the "pathname" (URL) changes

  return null;
}