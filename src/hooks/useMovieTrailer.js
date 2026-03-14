import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addtrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    // fetch trailer video
    const getMovieVideo = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTION
      );
      const json = await data.json();
    
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
    
      dispatch(addtrailerVideo(trailer))
    };
  
    useEffect(() => {
      getMovieVideo();
    }, []);
  
}

export default useMovieTrailer;