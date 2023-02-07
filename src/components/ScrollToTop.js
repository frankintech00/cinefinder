import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  // Get the current pathname from the location object
  const { pathname } = useLocation();

  // Use effect to scroll to the top of the page whenever the pathname changes
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, [pathname]);

  // Return null as this component doesn't render anything
  return null;
}
