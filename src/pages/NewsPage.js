import React from 'react';
import Navbar from '../components/navbar/Navbar';
import News from '../components/news/News';
import {Link,useRouteMatch} from "react-router-dom"

const NewsPage = () => {
  let {path}=useRouteMatch();
  return (
    <div style={{ backgroundColor: '#F4F4F4' }}>
      <Navbar news={true}  path={path} all={true} video={true} article={true}/>
      <News news={true} path={path} all={true} video={true} article={true} />
    </div>
  );
};

export default NewsPage;