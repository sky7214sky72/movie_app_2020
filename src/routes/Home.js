import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {

  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(process.env.PUBLIC_URL + '/movies.json'); 
    this.setState({ movies, isLoading: false });
  };
  //App 컴포넌트가 그려지면(render() 함수가 실행되면) 호출되는 생명주기 함수
  componentDidMount() {
    //영화 데이터 로딩
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
