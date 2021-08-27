import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewsBottomItem from './NewsBottomItem';

const NewsBottom = ({path,all,article,video}) => {
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
    shuffle(type)
   
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
          setType(newsT)
          break;
      }
  }
  function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  console.log(type)
  
  

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
        <NewsBottomItem  item={item} index={index} path={path} type={type} videoT={videoT} newsT={newsT} />
      ))}
    </div>
  );
};

export default NewsBottom;
