import React from 'react';

function Food({fav}){  
  return <h1>I like {fav}</h1>;
}
function App() {
  //return <div className="App"/>
  return (
    <div>
      <h1>Hello!!!!!!</h1>      
      <Food fav="kimchi"/>  
      <Food fav="ramen"/>  
      <Food fav="kimbob"/>
      <Food fav="kim"/>    
    </div>
  );
}

export default App;
