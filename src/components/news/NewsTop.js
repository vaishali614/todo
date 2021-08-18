import React, { useEffect, useState } from 'react';
import share from '../../Images/Assets-LT/share.png';
import tab from '../../Images/Assets-LT/tab.png';
import heart from '../../Images/Assets-LT/heart.png';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselContentNews from './CarouselContentNews'

const NewsTop = () => {
  const [videoT, setVideo] = useState([]);
  const[type,setType]=useState('video');

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get('/appapi/lt/category/videos');
      setVideo(res.data.data.video);
      
    };

    fetchVideo();
  }, []);
  
    useEffect(()=>{
    const fetchdata=async()=>{
      let res;
      type==='video'?res=await axios.get('/appapi/lt/category/videos'):
      await axios.get('/appapi/lt/category/news');
      setType(res.data.data);
    }
    fetchdata();
  })


  return (
    // caraousal
    <div className="newstop">
    <Carousel infiniteLoop useKeyboardArrows autoPlay showArrows={true} showThumbs={false} className="carousel">
       {videoT.map((item,index)=>(
           <CarouselContentNews item={item} index={index}/>
       ))}
      </Carousel>

 {/*<Carousel infiniteLoop useKeyboardArrows autoPlay showArrows={true} showThumbs={false} className="carousel">

       {article && content.map((itema,indexa)=>(
        <CarouselContentNews item={itema} index={indexa} article={article}/>
       ))}
       {video && videoT.map((item,index)=>(
           <CarouselContentNews item={item} index={index} video={video}/>
       ))}
       </Carousel>*/}
      
    </div>
  );
};

export default NewsTop;
