import React from 'react';
import Liveshow from '../components/liveshow/Liveshow';
import Navbar from '../components/navbar/Navbar';

const LiveShowPage = () => {
  return (
    <div style={{ backgroundColor: '#F4F4F4' }}>
      <Navbar liveshow={true} />
      <Liveshow />
    </div>
  );
};

export default LiveShowPage;
