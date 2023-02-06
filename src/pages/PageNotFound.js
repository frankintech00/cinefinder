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
        <div className="flex flex-col items-center my-4">
          <p className="my-10 font-bold text-gray-700 text-7xl dark:text-white">
            404, Oops!
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
