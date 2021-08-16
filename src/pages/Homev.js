import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Liveshow from '../components/liveshow/Liveshow';
import News from '../components/news/News';
import Business from '../components/business/Business';
import Businessv from '../components/businessv/Businessv'

const Home = () => {
  return (
    <div style={{ backgroundColor: '#F4F4F4' }}>
      <Navbar home={true} />
      <Liveshow />
      <br />
      <br />
      <Businessv />
      
    </div>
  );
};

export default Home;