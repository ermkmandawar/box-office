import React from 'react';
import Nav from './Nav';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title title={'Box Office'} subtitle={'The largest movie database'} />
      <Nav />
      {children}
    </div>
  );
};

export default MainPageLayout;
