import React from 'react';
import  ReactDOM  from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
(function(){
      setInterval(()=>{
        var d = new Date().toLocaleTimeString();
        document.getElementById("time").innerHTML = d;
      })
      })();
