import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
console.log(movies)
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          {/* 
          MovieList - Popular
            - MovieCard* n
          MovieList - Now Playing
          MovieList - Trending
          MovieList - Horror

      */}
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovie} />
          <MovieList
            title={"Top Rated"}
            movies={movies.topRatedMovie}
          />
          <MovieList title={"Trending"} movies={movies.trendingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
