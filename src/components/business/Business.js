import React from 'react';
import BusinessTop from './BusinessTop';
import BusinessBottom from './BusinessBottom';
import './business.css'

const Business = ({all,article,video,path}) => {
  return (
    <div   style={{backgroundColor:"white",marginLeft:"15px",marginRight:"15px"}}>
      <div className="liveheader bullet" style={{backgroundColor:"#F5EE61"}}>Business</div>
      <div className=" border" style={{border:"1px solid red",marginLeft:"20px",marginRight:"20px"}}>
      <div className="container-fluid ">
      <BusinessTop path={path} all={all} article={article} video={video} />
      <BusinessBottom path={path} all={all} article={article} video={video}/>
    </div>
      </div>
     
    </div>
  );
};

export default Business;
