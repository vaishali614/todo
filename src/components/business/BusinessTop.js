import React, { useEffect, useState } from 'react';
import axios from 'axios';
import share from '../../Images/Assets-LT/share.png';
import tab from '../../Images/Assets-LT/tab.png';
import heart from '../../Images/Assets-LT/heart.png';
import CarouselContent from './CarouselContent';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const BusinessTop = ({path,all,article,video}) => {

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

  console.log(videoT);
  const allT=videoT.concat(newsT);
  console.log(allT)
  
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
 
  return (
    // caraousal
    <div className="newstop">
   
    <Carousel infiniteLoop useKeyboardArrows autoPlay showArrows={true} showThumbs={false} className="carousel">
        {type.map((item,index)=>(
        <CarouselContent item={item} index={index} path={path} type={type} videoT={videoT} newsT={newsT}/>
        ))}
      </Carousel>
     
    </div>
    
  );
};

export default BusinessTop;
