import React, { useState } from 'react';

function UseStateDemo () {
  const [dot, setDot] = useState(0);
  return (
    <div className="use-state-demo">
      <div className="sidebar-panel">
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

export default UseStateDemo;
