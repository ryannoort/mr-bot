import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Frames from './Frames';

ReactDOM.render(
  <React.StrictMode>
    <div className="absolute h-screen w-screen bg-white z-50 opacity-90">
    </div>
    <div className="h-screen">
      <Frames />
     </div>
  </React.StrictMode>,
  document.getElementById('root')
);
