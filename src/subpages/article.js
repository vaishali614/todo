import React from 'react'
import Business from '../components/business/Business';
import News from '../components/news/News';
import LiveShow from '../components/liveshow/Liveshow';
import Navbar from '../components/navbar/Navbar';


const article = () => {
    return (
        <div style={{ backgroundColor: '#F4F4F4' }}>
            <Navbar article={true} />
            <LiveShow/>
            <News/>
            <Business />
        </div>
    )
}

export default article