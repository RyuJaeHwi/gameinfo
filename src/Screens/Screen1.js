// Screen1.js
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';  // react-spring을 임포트
import './Screen1.css';  // CSS 파일만 import

const Screen1 = () => {
  // 'GameSubTitle' 애니메이션 시작 여부 상태
  const [startSubTitle, setStartSubTitle] = useState(false);

  useEffect(() => {
    // GameTitle 애니메이션이 0.7초 후에 GameSubTitle 시작
    const timer = setTimeout(() => {
      setStartSubTitle(true); // 0.7초 후에 GameSubTitle 애니메이션 시작
    }, 400); // 0.7초 후에 설정

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 timer 제거
  }, []);

  // GameTitle 애니메이션 설정
  const titleProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { duration: 1000 },
  });

  // GameSubTitle 애니메이션 설정 (0.7초 후에 시작)
  const subTitleProps = useSpring({
    opacity: startSubTitle ? 1 : 0,  // startSubTitle이 true일 때만 보이도록
    transform: startSubTitle ? 'translateY(0)' : 'translateY(20px)',  // 애니메이션 효과 시작
    config: { duration: 1000 },
    delay: 400,  // GameTitle이 0.7초 동안 진행될 때, 0.7초 뒤에 GameSubTitle이 시작
  });

  return (
    <div className="Screen1Page">
      {/* GameTitle에 애니메이션 적용 */}
      <animated.div style={titleProps} className="GameTitle"></animated.div>

      {/* GameSubTitle에 애니메이션 적용 */}
      <animated.div style={subTitleProps} className="GameSubTitle"></animated.div>
    </div>
  );
};

export default Screen1;
