import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";


const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const topRatedMovie = useSelector(store => store.movies.topRatedMovie);

    const getTopRatedMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTION);
        const json =await data.json();
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(() => {
        if(!topRatedMovie) getTopRatedMovies();
    }, [])
}

export default useTopRatedMovies;