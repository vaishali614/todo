import React from 'react'
import './submenu.css'
import {NavLink,Route,Switch,useParams} from "react-router-dom"

const submenu = ({path,all,article,video}) => {
    console.log(all)
    return (
        <div className="container-fluid " style={{display:"flex"}}>
        
        <NavLink  to={`${path}/all`}  className="submenu" exact  activeStyle={
            {backgroundColor:"#56b2b9", color:"white"}
        }>All</NavLink>
        <NavLink   to={`${path}/video`} className="submenu" exact  activeStyle={
            {backgroundColor:"#56b2b9", color:"white"}
        }>Video</NavLink>
        <NavLink to={`${path}/article`}  className="submenu" exact  activeStyle={
            {backgroundColor:"#56b2b9", color:"white"}
        }>Article</NavLink>
        <NavLink to="#" className="submenu">Audio</NavLink>
        </div>
        
        
       
       
  
    )
}


export default submenu;

