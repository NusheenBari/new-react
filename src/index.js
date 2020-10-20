import React from 'react';
import ReactDOM from 'react-dom';

 
function App(){
  return(
    <>
    <Person />
    <Message/>
    </>
  )
}

const Person = () => <h1>Nush</h1>
const Message = () => {
  return(
    <p>The World is your fluff ball.. ;)</p>
  )
}



ReactDOM.render(<App/>, document.getElementById('root'))
