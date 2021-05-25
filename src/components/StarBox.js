import React from 'react';

export default function CommentSection({rating}){
  if(parseFloat(rating) > 0.1 && parseFloat(rating) < 1.5){
    return(
      <div className="stars-box">
        <span key="1" className="material-icons star-static yellow">grade</span>
        <span key="2" className="material-icons star-static">grade</span>
        <span key="3" className="material-icons star-static">grade</span>
        <span key="4" className="material-icons star-static">grade</span>
        <span key="5" className="material-icons star-static">grade</span>
      </div>
    )
  }else if(parseFloat(rating) > 1.5 && parseFloat(rating) < 2.5){
    return(
      <div className="stars-box">
        <span key="1" className="material-icons star-static yellow">grade</span>
        <span key="2" className="material-icons star-static yellow">grade</span>
        <span key="3" className="material-icons star-static">grade</span>
        <span key="4" className="material-icons star-static">grade</span>
        <span key="5" className="material-icons star-static">grade</span>
      </div>
    )
  }else if(parseFloat(rating) > 2.5 && parseFloat(rating) < 3.5){
    return(
      <div className="stars-box">
        <span key="1" className="material-icons star-static yellow">grade</span>
        <span key="2" className="material-icons star-static yellow">grade</span>
        <span key="3" className="material-icons star-static yellow">grade</span>
        <span key="4" className="material-icons star-static">grade</span>
        <span key="5" className="material-icons star-static">grade</span>
      </div>
    )
  }else if(parseFloat(rating) > 3.5 && parseFloat(rating) < 4.5){
    return(
      <div className="stars-box">
        <span key="1" className="material-icons star-static yellow">grade</span>
        <span key="2" className="material-icons star-static yellow">grade</span>
        <span key="3" className="material-icons star-static yellow">grade</span>
        <span key="4" className="material-icons star-static yellow">grade</span>
        <span key="5" className="material-icons star-static">grade</span>
      </div>
    )
  }else if(parseFloat(rating) > 4.5 && parseFloat(rating) < 5.5){
    return(
      <div className="stars-box">
        <span key="1" className="material-icons star-static yellow">grade</span>
        <span key="2" className="material-icons star-static yellow">grade</span>
        <span key="3" className="material-icons star-static yellow">grade</span>
        <span key="4" className="material-icons star-static yellow">grade</span>
        <span key="5" className="material-icons star-static yellow">grade</span>
      </div>
    )
  }else{
    return(
      <div className="stars-box">
      <span key="1" className="material-icons star-static">grade</span>
      <span key="2" className="material-icons star-static">grade</span>
      <span key="3" className="material-icons star-static">grade</span>
      <span key="4" className="material-icons star-static">grade</span>
      <span key="5" className="material-icons star-static">grade</span>
    </div>
    )
  }

}