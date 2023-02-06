import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <div className="max-w-sm m-3 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to="/">
        <img className="rounded-t-lg" src="" alt="" />
      </Link>
      <div className="p-5">
        <Link to="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate,
            natus?
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          laboriosam aliquam voluptas molestiae ad sint aspernatur distinctio
          itaque, omnis eos, quas assumenda atque placeat perferendis velit modi
          explicabo magni, aut quam sit fuga? Officia optio quia ab nostrum a
          iste, autem fugit maxime magni error voluptates vero repellat omnis
          exercitationem!
        </p>
      </div>
    </div>
  );
};
