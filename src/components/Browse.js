
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';

const Browse = () => {

  //custome hooks call
 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();
 useUpcomingMovies();
 useTrendingMovies();

  return (
    <div>
      <Header/>
      
       {/* 
        MainContainer
          - Video background
          - Video Title */}
      <MainContainer/>
    
    {/* Secondary container
          - movieList * n
            - cards * n
      */}
      <SecondaryContainer/>   
       
    </div>
  )
}

export default Browse