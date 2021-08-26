import React from 'react';
import Liveshow from '../components/liveshow/Liveshow';
import Navbar from '../components/navbar/Navbar';
import {Link,useRouteMatch} from "react-router-dom"

const LiveShowPage = () => {
  let {path}=useRouteMatch();
  return (
    <div style={{ backgroundColor: '#F4F4F4' }}>
      <Navbar liveshow={true} path={path}/>
      <Liveshow />
    </div>
  );
};

export default LiveShowPage;
