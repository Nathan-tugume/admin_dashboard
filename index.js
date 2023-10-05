import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import 'bootstrap-icons/font/bootstrap-icons.css'


ReactDOM.render(

 <React.StrictMode>
   <div className='container-fluid bg-secondary min-vh-100'>
     <div className='row'>
      <div className='col-2 bg-secondary'>
       <Sidebar/>
       </div>
       <div className='col'>
        <Home />
       </div>
     </div>

 </div>
 </React.StrictMode>,
 document.getElementById('root')
);
