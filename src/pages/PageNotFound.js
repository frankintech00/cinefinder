import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/pagenotfound.png";
import { Button } from "../components";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found / Cinefinder`;
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center mx-8 my-4">
          <p className="my-3 text-3xl font-bold text-center text-gray-700 dark:text-white">
            404 Page Not Found
          </p>
          <p className="my-3 text-xl font-bold text-center text-gray-700 dark:text-white">
            Sorry, the movie you're looking for seems to have gone on a wild
            adventure!
          </p>
          <p className="my-3 text-xl font-bold text-center text-gray-700 dark:text-white">
            It's not here right now, but we're sure it'll return soon!
          </p>
          <p className="my-3 text-xl font-bold text-center text-gray-700 dark:text-white">
            In the meantime, why not check out some other flicks? Who knows, you
            might just find a hidden gem you never even knew existed!
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404 Page Not Found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back To CineFinder</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
