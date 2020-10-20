import React from 'react';
import ReactDOM from 'react-dom';

 
 function App(){
   return(
     <div>
       <h1>HEllo!</h1>
       <p>World of ka-a-h</p>
     </div>
       
   )
 }

//  const Greet = () => {
//     return React.createElement('h1', {}, 'Hello World')
//  }

 ReactDOM.render(<App/>, document.getElementById('root'))
