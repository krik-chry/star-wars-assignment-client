import React, { Component } from 'react';

class MainPage extends Component {
  render() {
    const { allMovies, searchTerm, message, onSubmit, onChange, onFilmClick } = this.props;
    return (
      <div>
        {allMovies.map(movie => {
          return (
            <button key={movie.id} onClick={() => onFilmClick(movie.id)}>
              Episode {movie.episode}
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
