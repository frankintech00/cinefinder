import { Routes, Route } from "react-router-dom";
import { MovieList, MoviePage, Search, PageNotFound } from "../pages";

export const ALLRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route path="movie/:id" element={<MoviePage />} />
        <Route path="" element={<MovieList />} />
        <Route path="movies/popular" element={<MovieList />} />
        <Route path="movies/top" element={<MovieList />} />
        <Route path="movies/upcoming" element={<MovieList />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
