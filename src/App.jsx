
import React from 'react';
import { Link, Outlet} from 'react-router-dom';
function App() {
 
 return (

  <div>
    
    <h1>App component</h1>
    
    <ul>
    
       <Link to='/products'>Products</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/countries'>Countries</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/todolist'>Todolist</Link>
      <Outlet></Outlet>
    </ul>

  </div>
  );
}

export default App