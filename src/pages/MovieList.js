import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components";

// The MovieList component receives an `apiPath` and `title` as props and returns a main section containing movie cards
export const MovieList = ({ apiPath, title }) => {
  // Call the `useFetch` hook and destruct the returned `data` property into a `movies` variable
  const { data: movies } = useFetch(apiPath);

  // Call the `useTitle` hook and pass it the `title` prop
  useTitle(title);

  // Return the main section with class names for styling and the movie cards within a flex container
  return (
    <main className="p-10 mx-auto bg-slate-100 dark:bg-slate-800 max-w-1280 min-h-90vh">
      <section className="mx-auto max-w-7xl py-7">
        <div className="flex flex-wrap justify-start other:justify-evenly">
          {movies.map((movie) => (
            // Render the `Card` component for each movie in the `movies` list, passing the movie data and using its id as a key
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
