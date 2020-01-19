import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../actions/allMovies';
import { getCharacters, clearMessage } from '../../actions/movieData';
import MainPage from './MainPage';
import Characters from '../Characters';

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
    if (this.state.searchTerm !== '') {
      this.props.clearMessage();
      this.props.getCharacters(this.state.searchTerm);

      this.setState({
        searchTerm: ''
      });
    }
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
          movieData={this.props.movieData}
        />
        <Characters movieData={this.props.movieData} />
      </>
    );
  }
}
const mapStateToProps = state => ({
  allMovies: state.allMovies,
  movieData: state.movieData,
  messages: state.messages
});

const mapDispatchToProps = { getMovies, getCharacters, clearMessage };

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
