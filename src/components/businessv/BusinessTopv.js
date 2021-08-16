import React, { useEffect, useState } from 'react';
import axios from 'axios';
import share from '../../Images/Assets-LT/share.png';
import tab from '../../Images/Assets-LT/tab.png';
import heart from '../../Images/Assets-LT/heart.png';
import CarouselContentv from './CarouselContentv';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const BusinessTopv = () => {

    const [videoT, setVideoT] = useState([]);

    useEffect(() => {
      const fetchVideo = async () => {
        const res = await axios.get('/appapi/lt/category/videos');
        setVideoT(res.data.data.video);
        
      };
  
      fetchVideo();
    }, []);

    const breakPoints=[
        {width:1,itemsToShow:1},
        {width:550,itemsToShow:2},
        {width:760,itemsToShow:3},
        {width:1200,itemsToShow:4},
    
      ]
 
  return (
    // caraousal
    <div>
      <Carousel infiniteLoop useKeyboardArrows autoPlay showArrows={true} showThumbs={false} className="carousel">
         {videoT.map((item,index)=>(
             <CarouselContentv item={item} index={index}/>
         ))}
        </Carousel>
        
      </div>
    
  );
};

export default BusinessTopv;
