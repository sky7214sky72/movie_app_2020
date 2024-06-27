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
    //구조분해할당
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoading: false });//구조분해할당으로 얻은 영화 데이터가 있는 변수
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
