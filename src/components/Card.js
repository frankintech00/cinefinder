// Import the Link component from the 'react-router-dom' library
import { Link } from "react-router-dom";
// Import the Backup image from the '../assets/backup.png' file
import Backup from "../assets/backup.png";

// The Card component takes a 'movie' object as a prop and displays information about a movie
export const Card = ({ movie }) => {
  // Destructure the movie object to extract the id, original_title, overview, and poster_path properties
  const { id, original_title, overview, poster_path } = movie;

  // Set the image source based on whether a poster_path is provided. If not, use the Backup image.
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : Backup;

  // Render the Card component with movie information
  return (
    <div className="max-w-sm m-3 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      {/* Create a Link component to the movie page for this movie */}
      <Link to={`/movie/${id}`}>
        {/* Display the movie poster */}
        <img className="rounded-t-lg" src={image} alt="" />
      </Link>
      <div className="p-5">
        {/* Create another Link component to the movie page for this movie */}
        <Link to={`/movie/${id}`}>
          {/* Display the original title of the movie */}
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </Link>
        {/* Display the overview of the movie */}
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
      </div>
    </div>
  );
};
