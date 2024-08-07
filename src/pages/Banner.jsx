import React, {useState, useEffect} from 'react';
import './banner.css';
import MovieContent from '../components/MovieContent';
import PlayBtn from '../components/PlayBtn';
import MovieSwiper from '../components/MovieSwiper';


function Banner() {
   //This is the constant for the movies!
        const [movies, setMovies] = useState([]);

    //This is a fetch to collect the movie data from the folder data and the moviedata json!
          const fetchData = () =>{
              fetch('http://localhost:3000/data/movieData.json')
              .then(res=>res.json())
              .then(data => setMovies(data))
              .catch(e => console.log(e.message));
          };

          useEffect( ()=>{
            fetchData();
          }, []);

          const handleSlideChange = id => {
             const newMovies = movies.map(movie=>{
                  movie.active =false;
                  if(movie._id===id){
                    movie.active =true;
                  }

                  return movie;
             });
             setMovies(newMovies);
          };


          //This is the banner section with HTML and React! It has the movie key, background image, the content, the release date and the play button!. It also supports the MovieSwiper component!
    return (
        <div className="banner">
            {
                movies && movies.length>0 && movies.map(movie=>(
                    <div className="movie" key={movie._id}>
                    <img 
                     src={movie.bgImg} 
                     alt="Background Image"
                     className={`bgImg ${movie.active ? 'active': undefined}`}
                     />
                    <div className="container-fluid">
                      <div className="row">
                          <div className="col-lg-6 col-md-12">
                             <MovieContent movie={movie}/>
                          </div>
                          <div className="col-lg-6 col-md-12">
                              <PlayBtn movie={movie}/>
                          </div>
                      </div>
                    </div>
                  </div>
                ))}
          
          
            {movies && movies.length> 0 && (<MovieSwiper slides={movies} slideChange={handleSlideChange} />)}

        </div>
    );
}

export default Banner;
