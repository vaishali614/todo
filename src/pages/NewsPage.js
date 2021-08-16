import React from 'react';
import Navbar from '../components/navbar/Navbar';
import News from '../components/news/News';

const NewsPage = () => {
  return (
    <div style={{ backgroundColor: '#F4F4F4' }}>
      <Navbar news={true} />
      <News />
    </div>
  );
};

export default NewsPage;