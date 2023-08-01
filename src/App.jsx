
import React from 'react';
import { Link, Outlet} from 'react-router-dom';
function App() {
 
 return (

  <div>
    
    <h1>App component</h1>
    <Outlet></Outlet>
    <ul>
    
      <li><Link to='/about'>Aboutus</Link></li>
      <li><Link to='/contact'>Contactus</Link></li>
    </ul>

  </div>
  );
}

export default App