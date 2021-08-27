import React from 'react';
import photo from '../../Images/Assets-LT/photo.jpg'
import photo2 from '../../Images/Assets-LT/image2.jpg'
import {NavLink,Route,Switch,useParams} from "react-router-dom"

const LiveshowRight = () => {
  return (
    <div style={{ flex:"1" ,backgroundColor:"white" }} className="container c" >
      <div className="container-fluid" style={{ display: 'flex', justifyContent: 'space-between ', paddingLeft: '0' }}>
        <div className="schedule">लाइव शेड्यूल</div>
        <div style={{color:"#EF4F4F",marginTop:"20px"}}>View Live Schedule</div>
      </div>
      <div className="week container-fluid" style={{ display: 'flex', justifyContent: 'space-between ', overflow: "scroll", paddingLeft: '0' }}>
        <a className="active3" >MON</a>
        <a href="#">TUE</a>
        <a href="">WED</a>
        <a href="">THU</a>
        <a href="">FRI</a>
        <a href="">SAT</a>
      </div>
      {/* this div is repeated 3 times */}
      
      <div className="container-fluid imageselect row" style={{ display: 'flex', justifyContent: 'space-between ', paddingLeft: '0', paddingRight: '0' }}>
        <div className="col-md-4 live-show-image" style={{paddingRight: '0'}}>
        <img
          src={photo}
          style={{ width: '150px', height: '120px',borderRadius:"4px" ,marginTop:"4px" }}
        />
        </div>
        <div className="col-md-5 live-show-image" style={{paddingLeft:"0px"}}>
          <h5 style={{fontSize:"18px"}}>The lallantop Episode 5</h5>
          <p style={{fontSize:"14px"}}>
          IndvsEng: लॉर्ड्स क्रिकेट मैदान पर तीसरे दिन सिक्योरिटी गार्ड्स को चकमा देकर कौन घुस आया?
          </p>
          <div className="imagesBadge" style={{ display: 'flex', justifyContent: 'space-around' }}>
            <p>#Police</p>
            <p>#Bihar</p>
            <p>#Politics</p>
          </div>
        </div>
        <div className="col-md-3" style={{paddingRight: '0'}}>
        <div className="notifyme" style={{margin: 'auto'}}>Notify me</div>
         <div className="time">start time</div>
         <div className="am">5:30 PM</div>
         <div className="time">Duration</div>
         <div className="am">20 Minutes</div>
        </div>
      </div>
      <hr style={{marginLeft:"20px",marginRight:"20px",color:"gray"}}/>
      <div className="container-fluid imageselect row" style={{ display: 'flex', justifyContent: 'space-between ', paddingLeft: '0', paddingRight: '0' }}>
      <div className="col-md-4 live-show-image" style={{paddingRight: '0'}}>
      <img
        src={photo2}
        style={{ width: '150px', height: '120px',borderRadius:"4px" ,marginTop:"4px" }}
      />
      </div>
      <div className="col-md-5 live-show-image" style={{paddingLeft:"0px"}}>
        <h5 style={{fontSize:"18px"}}>The lallantop Episode 6</h5>
        <p style={{fontSize:"14px"}}>
        IndvsEng: लॉर्ड्स क्रिकेट मैदान पर तीसरे दिन सिक्योरिटी गार्ड्स को चकमा देकर कौन घुस आया?
        </p>
        <div className="imagesBadge" style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p>#Police</p>
          <p>#Bihar</p>
          <p>#Politics</p>
        </div>
      </div>
      <div className="col-md-3" style={{paddingRight: '0'}}>
      <div className="notifyme" style={{margin: 'auto'}}>Notify me</div>
       <div className="time">start time</div>
       <div className="am">5:30 PM</div>
       <div className="time">Duration</div>
       <div className="am">20 Minutes</div>
      </div>
    </div>
    <hr style={{marginLeft:"20px",marginRight:"20px",color:"gray"}}/>
    <div className="container-fluid imageselect row" style={{ display: 'flex', justifyContent: 'space-between ', paddingLeft: '0', paddingRight: '0' }}>
    <div className="col-md-4 live-show-image" style={{paddingRight: '0'}}>
    <img
      src={photo}
      style={{ width: '150px', height: '120px',borderRadius:"4px" ,marginTop:"4px" }}
    />
    </div>
    <div className="col-md-5 live-show-image" style={{paddingLeft:"0px"}}>
      <h5 style={{fontSize:"18px"}}>The lallantop Episode 7</h5>
      <p style={{fontSize:"14px"}}>
      IndvsEng: लॉर्ड्स क्रिकेट मैदान पर तीसरे दिन सिक्योरिटी गार्ड्स को चकमा देकर कौन घुस आया?
      </p>
      <div className="imagesBadge" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <p>#Police</p>
        <p>#Bihar</p>
        <p>#Politics</p>
      </div>
    </div>
    <div className="col-md-3" style={{paddingRight: '0'}}>
    <div className="notifyme" style={{margin: 'auto'}}>Notify me</div>
     <div className="time">start time</div>
     <div className="am">5:30 PM</div>
     <div className="time">Duration</div>
     <div className="am">20 Minutes</div>
    </div>
  </div>
      </div>
      
  );
};

export default LiveshowRight;
