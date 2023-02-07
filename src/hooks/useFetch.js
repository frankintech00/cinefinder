import { useState, useEffect } from "react";

// Custom hook that retrieves data from The Movie Database (TMDB) API
export const useFetch = (apiPath, queryTerm = "") => {
  // State to store the fetched data
  const [data, setData] = useState([]);

  // URL to fetch the data from
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  // Effect hook to fetch the data from the API
  useEffect(() => {
    // Async function to fetch the data
    async function fetchData() {
      // Fetch the data from the URL
      const response = await fetch(url);

      // Parse the response to JSON
      const json = await response.json();

      // Set the fetched data to the state
      setData(json.results);
    }

    // Call the fetchData function
    fetchData();
  }, [url]); // Re-run the effect hook only when the URL changes

  // Return the data
  return { data };
};
