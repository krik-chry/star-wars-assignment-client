import React, { Component } from 'react';
import './MainPage.css';
import image from '../../images/sw-height-img.jpg';

class MainPage extends Component {
  render() {
    const { allMovies, searchTerm, message, onSubmit, onChange, onFilmClick } = this.props;

    return (
      <div>
        <h1 id="header">STAR WARS Height-O-Meter</h1>
        <h3>Check your favorite character's height, for each film of the Star Wars Universe</h3>
        <img alt="height-sw" src={image} width="60%" />
        <div id="film-buttons">
          {allMovies.map(movie => {
            return (
              <button className="episode-btn" key={movie.id} onClick={() => onFilmClick(movie.id)}>
                EPISODE {movie.episode}
              </button>
            );
          })}
        </div>
        <form autoComplete="off" onSubmit={onSubmit}>
          <input
            placeholder="Search by film title term or choose an episode."
            type="text"
            name="searchTerm"
            value={searchTerm}
            onChange={onChange}
          />
        </form>
        {message && <h2>{message}</h2>}
      </div>
    );
  }
}

export default MainPage;
