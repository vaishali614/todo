import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Liveshow from '../components/liveshow/Liveshow';
import News from '../components/news/News';
import Business from '../components/business/Business';
import {Link,useRouteMatch} from "react-router-dom"

const Home = () => {
  
  let {path,url}=useRouteMatch();
  return (
    <div style={{ backgroundColor: '#F4F4F4' }}>
      <Navbar home={true} path={path} url={url} all={true} video={true} article={true}  />
      <Liveshow />
      <br />
      <br />
      <News home={true} path={path} url={url} all={true} video={true} article={true}/>
      <br />
      <br />
      <Business home={true} path={path} url={url} all={true} video={true} article={true} />
    </div>
  );
};

export default Home;