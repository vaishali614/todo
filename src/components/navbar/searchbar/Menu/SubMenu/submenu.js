import React from 'react'
import './submenu.css'

const submenu = ({article,video}) => {
    return (
        <div className="container-fluid" style={{display:"flex"}}>
            <a  href ="/" className="innerm">All</a>
            <a href="/content/video" className={video && 'active'} className="innerm">Video</a>
            <a href="/content/article" className={article && 'active'} className="innerm">Article</a>
            <a className="innerm">Audio</a>
        </div>
    )
}

export default submenu
