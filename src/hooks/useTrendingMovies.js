import { useDispatch, useSelector } from "react-redux"
import { API_OPTION } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const trendingMovies = useSelector(store => store.movies.trendingMovies);
    const getTrendingMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/trending/movie/day", API_OPTION);
        const json = await  data.json();
        dispatch(addTrendingMovies(json.results))
    }

    useEffect(() => {
        if(!trendingMovies) getTrendingMovies();
    }, [])
   

}

export default useTrendingMovies