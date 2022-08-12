import React, { useState } from 'react';
import MainPageLayout from '../component/MainPageLayout';

const Home = () => {
  const [input, setInput] = useState('');

  const onChangedInput = ev => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=girls

    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(results => console.log(results));
  };

  const onKeyPress = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  return (
    <MainPageLayout>
      <input
        type={'text'}
        onChange={onChangedInput}
        value={input}
        onKeyDown={onKeyPress}
      />
      <button type={'button'} onClick={onSearch}>
        Search
      </button>
    </MainPageLayout>
  );
};

export default Home;
