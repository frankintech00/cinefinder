import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components";

export const Search = ({ apiPath }) => {
  // get the search params from the URL
  const [searchParams] = useSearchParams();

  // get the value of the "q" parameter from the search params
  const queryTerm = searchParams.get("q");

  // fetch data for the search query using the "useFetch" hook
  const { data: movies } = useFetch(apiPath, queryTerm);

  // set the document title to "Search result for [queryTerm]" using the "useTitle" hook
  useTitle(`Search result for ${queryTerm}`);

  return (
    <main>
      {/* display the search result header */}
      <section className="py-7 mx-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {/* display "No result found for '[queryTerm]'" if no movies were found, otherwise display "Result for '[queryTerm]'" */}
          {movies.length === 0
            ? `No result found for '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </p>
      </section>
      {/* display the list of movies */}
      <section className="mx-auto max-w-7xl py-7">
        <div className="flex flex-wrap justify-start">
          {/* map over the movies and render a "Card" component for each movie */}
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
