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

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get('/appapi/lt/category/videos');
      setVideo(res.data.data.video);
      
    };

    fetchVideo();
  }, []);

  return (
    // caraousal
    <div className="newstop">
    <Carousel infiniteLoop useKeyboardArrows autoPlay showArrows={true} showThumbs={false} className="carousel">
       {videoT.map((item,index)=>(
           <CarouselContentNews item={item} index={index}/>
       ))}
      </Carousel>
      
    </div>
  );
};

export default NewsTop;