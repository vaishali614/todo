import React from 'react'
import Business from '../components/business/Business';
import News from '../components/news/News';
import LiveShow from '../components/liveshow/Liveshow';
import Navbar from '../components/navbar/Navbar';
import Businessv from '../components/businessv/Businessv';


const video = () => {
    return (
        <div style={{ backgroundColor: '#F4F4F4' }}>
            <Navbar video={true} />
            <LiveShow/>
            <Businessv />
        </div>
    )
}

export default video
