import React, { useState, useEffect } from 'react';

function UseEffectDemo () {
  const [dot, setDot] = useState(0);
  useEffect(() => {
    console.log('我被渲染了');
    if (dot) {
      document.getElementById('heart').style.display = 'block';
      setTimeout(() => {
        document.getElementById('heart').style.display = 'none';
      }, 800)
    }
  });
  return (
    <div className="use-state-demo">
      <div className="sidebar-panel">
        <i id="heart" className="iconfont high-heart red_heart"> 被点赞了 + {dot}</i>
        <div
          className={`panel-item ${!dot && 'none'}`}
          badge={dot}
          onClick={() => setDot(dot + 1)}>
          <i className="iconfont high-zan" />
        </div>
        <div className="panel-item none">
          <i className="iconfont high-news" />
        </div>
        <div className="panel-item none">
          <i className="iconfont high-heart" />
        </div>
      </div>
    </div>
  )
}

export default UseEffectDemo;
