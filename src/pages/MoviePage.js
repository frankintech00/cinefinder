import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import Backup from "../assets/backup.png";

export const MoviePage = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});

  //eslint-disable-next-line
  const pageTitle = useTitle(movie.title);

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : Backup;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const json = await response.json();
      setMovie(json);
      console.log(json);
    }
    fetchMovie();
  }, [params.id]);

  function formatUKDate(date) {
    if (date) {
      const dateArray = date.split("-");
      return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
    }
    return "";
  }

  return (
    <main>
      <section className="flex flex-wrap justify-around py-5">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={movie.title} />
        </div>
        <div className="max-w-2xl text-lg text-gray-700 dark:text-white">
          <h1 className="my-3 text-4xl font-bold text-center lg:text-left">
            {movie.title}
          </h1>
          <p className="my-4">{movie.overview}</p>
          {movie.genres ? (
            <p className="flex flex-wrap gap-2 my-7">
              {movie.genres.map((genre) => (
                <span
                  className="p-2 mr-2 border border-gray-200 rounded dark:border-gray-600"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-2 text-gray-900 dark:text-white">
              {movie.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">
              {movie.vote_count} reviews
            </span>
          </div>

          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{movie.runtime} min.</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>${new Intl.NumberFormat().format(movie.budget)}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>${new Intl.NumberFormat().format(movie.revenue)}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{formatUKDate(movie.release_date)}</span>
          </p>

          <p className="my-4">
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
              rel="noreferrer"
              aria-label="View movie on IMDB"
            >
              <button className="imdb-logo-button" title="IMDB link">
                <img
                  className="w-32"
                  src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"
                  alt="IMDB link to your movie"
                />
              </button>
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
