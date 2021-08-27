import React,{useState,useEffect} from 'react';
import './menu.css';
import Submenu from './SubMenu/submenu';
import axios from 'axios';
import {Link,useRouteMatch} from "react-router-dom"
import { Condition } from './SubMenu/submenu';


const menu = ({ business, news, liveshow, home ,searchTerm,path,article,all,video}) => {


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [content, setContent] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchContent = async () => {
      const res = await axios.get('/appapi/lt/horizontal_menu');
      setContent(res.data.data.horizontal_menu);
      console.log(res.data.data.horizontal_menu);
    };
    
    fetchContent();
  }, []);
  //this api does not have the categories for news sports cinema etc....

  
  return (
    //using dummy data
    <div
      className='container-fluid'
      style={{ marginTop: '30px', padding: '0px' }}
    >
      <div className='navbar' style={{display: 'flex', flexWrap: 'nowrap', overflow: 'scroll'}}>
        <Link to='/home' className={home && 'activeS'} style={{borderRadius: "5px 0px 0px 5px" ,border:"1px solid gray"}} 
            onClick={()=>window.onload()}>
          <i className='fa fa-fw fa-home'></i> Home
        </Link>
        <Link to='/news' className={news && 'activeS'} style={{border:"1px solid gray"}}>
          <i className='fa fa-fw fa-search'></i> News
        </Link>
        <Link to='/business' className={business && 'activeS'} style={{border:"1px solid gray"}}>
          <i className='fa fa-fw fa-user'></i> Business
        </Link>
        <Link to='/liveshow' className={liveshow && 'activeS'} style={{border:"1px solid gray"}}>
          <i className='fa fa-fw fa-search'></i> LiveShow
        </Link>
        <a href='/news' style={{border:"1px solid gray"}}>
          <i className='fa fa-fw fa-envelope'></i> News
        </a>
        <Link to='/business' style={{border:"1px solid gray"}}>
          <i className='fa fa-fw fa-user'></i> Business
        </Link>
        <a href='/liveshow' style={{border:"1px solid gray"}}>
          <i className='fa fa-fw fa-search'></i> LiveShow
        </a>
        <Link href='#'  style={{border:"1px solid gray"}}>
          <i className='fa fa-fw fa-envelope'></i> News
        </Link>
        <a href='#'  style={{borderRadius: "0px 5px 5px 0px" ,border:"1px solid gray"}}>
          <i className='fa fa-fw fa-user'></i> Business
        </a>
      </div>
      {/*{content.map((item)=>(
      //   <div>{item.id}</div>
      // ))}*/}
      <Submenu 
        business={business} 
        news={news}
        liveshow={liveshow}
        path={path}
        all={all}
        article={article}
        video={video}
       />
      
     
      
    </div>
  );
};

export default menu;