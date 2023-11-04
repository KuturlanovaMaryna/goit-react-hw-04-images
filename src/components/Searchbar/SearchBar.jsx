import React, { useState } from 'react';
import css from './SearchBar.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const SearchBar = ({ onSubmit }) => {
  // state = {
  //   input: '',
  // };
  const [input, setInput] = useState('');

  const onChange = event => {
    setInput(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (input.trim() === '') {
      Notify.warning('Enter your search query');
      return;
    }

    onSubmit(input);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          name="input"
          onChange={onChange}
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
};

export default SearchBar;
