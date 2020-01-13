import React, { Component } from 'react';

class Characters extends Component {
  state = { charactersOrder: 'desc' };

  onSort = order => {
    this.setState({ charactersOrder: order });
  };
  render() {
    const movieCharacters = this.props.movieCharacters.characters;
    const filmTitle = this.props.movieCharacters.filmTitle;
    if (this.state.charactersOrder === 'desc') {
      return (
        <div>
          <p>{filmTitle}</p>
          {movieCharacters ? (
            <div>
              <button onClick={() => this.onSort('asc')}>
                Height ascending{' '}
                <span role="img" aria-label="down">
                  ⬆️
                </span>{' '}
              </button>
              {movieCharacters
                .sort(function(a, b) {
                  return b.height - a.height;
                })
                .map(character => {
                  return (
                    <div>
                      <p>
                        {character.name} {character.height} cm
                      </p>
                    </div>
                  );
                })}
            </div>
          ) : (
            <p>Search by film title term or choose a film.</p>
          )}
        </div>
      );
    } else {
      return (
        <div>
          <p>{filmTitle}</p>
          {movieCharacters ? (
            <div>
              <button onClick={() => this.onSort('desc')}>
                Height descending{' '}
                <span role="img" aria-label="down">
                  ⬇️
                </span>{' '}
              </button>

              {movieCharacters
                .sort(function(a, b) {
                  return a.height - b.height;
                })
                .map(character => {
                  return (
                    <div>
                      <p>
                        {character.name} {character.height} cm
                      </p>
                    </div>
                  );
                })}
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
