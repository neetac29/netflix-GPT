import { useDispatch } from "react-redux"
import { API_OPTION } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
    const dispatch = useDispatch();

    const getTrendingMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/trending/movie/day", API_OPTION);
        const json = await  data.json();
        dispatch(addTrendingMovies(json.results))
    }

    useEffect(() => {
        getTrendingMovies();
    }, [])
   

}

export default useTrendingMovies