import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Liveshow from '../components/liveshow/Liveshow';
import News from '../components/news/News';
import Business from '../components/business/Business';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#F4F4F4' }}>
      <Navbar home={true} />
      <Liveshow />
      <br />
      <br />
      <News />
      <br />
      <br />
      <Business />
    </div>
  );
};

export default Home;