// Screens/Screen2.js
import React from 'react';
import './Screen2.css';  // CSS 파일을 import
import GameSubTitle from '../assets/GameSubTitle.png';  // 이미지 import

const Screen2 = () => {
  return (
    <div className="Screen2Page">
      <img src={GameSubTitle} alt="GameSubTitle" className="GameSubTitle" />
    </div>
  );
}

export default Screen2;
