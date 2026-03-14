
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  //custome hooks call
 useNowPlayingMovies();

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