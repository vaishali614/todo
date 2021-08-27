import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BusinessBottomItem from './BusinessBottomItem';

const BusinessBottom = ({path,all,article,video}) => {
  const [videoT, setVideoT] = useState([]);
  const [newsT,setNewsT]=useState([]);
  const [type,setType]=useState([]);

  const actualPath=window.location.pathname;
  
  const articlePath=path.concat('/article');
  const videoPath=path.concat('/video')
  

  
 
  const fetchData=()=>{
    const video='/appapi/lt/category/videos';
    const article='/appapi/lt/category/news';

    const getVideos=axios.get(video);
    const getArticle=axios.get(article);
    axios.all([getArticle,getVideos]).then(
      axios.spread((...allData)=>{
        const allNews=allData[0].data.data.news;
        const allVideo=allData[1].data.data.video;
        setVideoT(allVideo);
        setNewsT(allNews);
       
      })
    )
  }
  useEffect(()=>{
    fetchData();
    myFunction();
   
  },[actualPath]);
  
  
  function myFunction()
  {
    let actualPath=window.location.pathname;
    console.log(actualPath)
      switch(actualPath){
        case videoPath:
          setType(videoT);
          break;
        case articlePath:
          setType(newsT);
          break;
        default:
          setType(videoT);
          break;
      }
  }
  return (
    <div className=" newsbottom"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        overflow: 'scroll'
      }}
    >
      {type.map((item,index) => (
        <BusinessBottomItem  item={item} index={index} path={path} type={type} videoT={videoT} newsT={newsT} />
      ))}
    </div>
  );
};

export default BusinessBottom;
