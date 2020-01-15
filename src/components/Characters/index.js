import React, { Component } from 'react';
import './Characters.css';
import sortDesc from '../../images/sort-desc.png';
import sortAsc from '../../images/sort-asc.png';

class Characters extends Component {
  state = { charactersOrder: 'desc' };

  onSort = order => {
    this.setState({ charactersOrder: order });
  };

  render() {
    const { loading, filmTitle, release_date, characters } = this.props.movieCharacters;

    if (characters && this.state.charactersOrder === 'desc') {
      characters.sort(function(a, b) {
        return b.height - a.height;
      });
    } else if (characters) {
      characters.sort(function(a, b) {
        return a.height - b.height;
      });
    }

    if (loading) {
      return (
        <div>
          <div className="lds-roller">
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
    } else {
      return (
        <div>
          {filmTitle && (
            <h2 id="film-title">
              {filmTitle.toUpperCase()}, {release_date}
            </h2>
          )}
          {characters && (
            <div>
              <div id="characters-table">
                <div id="table-headers">
                  <p id="name-header">Name</p>
                  <p id="height-header">
                    Height (cm){'  '}
                    <img src={sortAsc} className="sort-img" onClick={() => this.onSort('asc')} />
                    <img src={sortDesc} className="sort-img" onClick={() => this.onSort('desc')} />
                  </p>
                </div>
                {characters.map(character => {
                  return (
                    <div key={character.name} className="character-row">
                      <p className="character-name">{character.name}</p>
                      <p className="character-height">{character.height}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      );
    }
  }
}
export default Characters;
