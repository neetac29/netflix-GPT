import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovie: null,
        topRatedMovie: null,
        upcomingMovies: null,
        trendingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addtrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularMovie = action.payload;
        },
        addTopRatedMovies : (state, action) => {
            state.topRatedMovie = action.payload;
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addtrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTrendingMovies} = movieSlice.actions;

export default movieSlice.reducer