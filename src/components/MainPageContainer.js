import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions/allMovies';
import { getCharacters, clearMessage } from '../actions/movieCharacters';
import MainPage from './MainPage';
import Characters from './Characters';

class MainPageContainer extends Component {
  state = { searchTerm: '' };

  componentDidMount() {
    this.props.getMovies();
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.clearMessage();
    this.props.getCharacters(this.state.searchTerm);

    this.setState({
      searchTerm: ''
    });
  };
  onFilmClick = id => {
    this.props.clearMessage();
    this.props.getCharacters(id, null);
  };
  render() {
    return (
      <>
        <MainPage
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          allMovies={this.props.allMovies}
          searchTerm={this.state.searchTerm}
          onFilmClick={this.onFilmClick}
          message={this.props.messages}
        />
        <Characters movieCharacters={this.props.movieCharacters} />
      </>
    );
  }
}
const mapStateToProps = state => ({
  allMovies: state.allMovies,
  movieCharacters: state.movieCharacters,
  messages: state.messages
});

const mapDispatchToProps = { getMovies, getCharacters, clearMessage };

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
