import React from 'react';
import Business from '../components/business/Business';
import Navbar from '../components/navbar/Navbar';
import {Link,useRouteMatch} from "react-router-dom"

const Businesspage = () => {
  let {path,url}=useRouteMatch();
  return (
    <div style={{ backgroundColor: '#F4F4F4' }}>
      <Navbar business={true} path={path} url={url} all={true} video={true} article={true} />
      <Business business={true} path={path} url={url} all={true} video={true} article={true}/>
    </div>
  );
};

export default Businesspage;
