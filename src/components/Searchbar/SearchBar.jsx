import React, { Component } from 'react';
import css from './SearchBar.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default class SearchBar extends Component {
  state = {
    input: '',
  };

  onChange = event => {
    this.setState({ input: event.target.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.input.trim() === '') {
      Notify.warning('Enter your search query');
      return;
    }

    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <input
            name="input"
            onChange={this.onChange}
            className={css.searchInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.searchBtn}>
            <span className={css.buttonName}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}
