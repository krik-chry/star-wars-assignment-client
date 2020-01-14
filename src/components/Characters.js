import React, { Component } from 'react';
import './Characters.css';

class Characters extends Component {
  state = { charactersOrder: 'desc' };

  onSort = order => {
    this.setState({ charactersOrder: order });
  };
  render() {
    const movieCharacters = this.props.movieCharacters.characters;
    const loading = this.props.movieCharacters.loading;
    const filmTitle = this.props.movieCharacters.filmTitle;
    if (loading) {
      return (
        <div>
          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    } else if (this.state.charactersOrder === 'desc') {
      return (
        <div>
          <h2>{filmTitle}</h2>

          {movieCharacters ? (
            <div>
              <button onClick={() => this.onSort('asc')}>
                Height ascending{' '}
                <span role="img" aria-label="down">
                  ⬆️
                </span>{' '}
              </button>

              <div id="characters-table">
                <div id="table-headers">
                  <p>Name</p>
                  <p>Height(cm)</p>
                </div>
                {movieCharacters
                  .sort(function(a, b) {
                    return b.height - a.height;
                  })
                  .map(character => {
                    return (
                      <div className="character-row">
                        <p>{character.name}</p>
                        <p>{character.height}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          ) : (
            <p>Search by film title term or choose a film.</p>
          )}
        </div>
      );
    } else {
      return (
        <div>
          <h2>{filmTitle}</h2>

          {movieCharacters ? (
            <div>
              <button onClick={() => this.onSort('desc')}>
                Height descending{' '}
                <span role="img" aria-label="down">
                  ⬇️
                </span>{' '}
              </button>

              <div id="characters-table">
                <div id="table-headers">
                  <p>Name</p>
                  <p>Height(cm)</p>
                </div>
                {movieCharacters
                  .sort(function(a, b) {
                    return a.height - b.height;
                  })
                  .map(character => {
                    return (
                      <div className="character-row">
                        <p>{character.name}</p>
                        <p>{character.height}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          ) : (
            <p>Search by film title term or choose a film.</p>
          )}
        </div>
      );
    }
  }
}
export default Characters;
