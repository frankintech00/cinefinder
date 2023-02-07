import { useEffect } from "react";

// Custom hook to set the document title
export const useTitle = (title) => {
  // This useEffect hook updates the document title whenever the component using it re-renders
  useEffect(() => {
    document.title = `${title} / CineFinder`;
  });

  // This hook returns null as it is only used for side effects
  return null;
};
