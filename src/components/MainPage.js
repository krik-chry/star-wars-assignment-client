import React, { Component } from 'react';
import './MainPage.css';
class MainPage extends Component {
  render() {
    const { allMovies, searchTerm, message, onSubmit, onChange, onFilmClick } = this.props;
    return (
      <div>
        {allMovies.map(movie => {
          return (
            <button className="episode-btn" key={movie.id} onClick={() => onFilmClick(movie.id)}>
              EPISODE {movie.episode}
            </button>
          );
        })}
        <form onSubmit={onSubmit}>
          <label>
            Search:
            <input type="text" name="searchTerm" value={searchTerm} onChange={onChange} />
          </label>
        </form>
        {message && <p>{message}</p>}
      </div>
    );
  }
}

export default MainPage;
