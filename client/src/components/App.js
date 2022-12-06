import React from 'react';
import Categories from './Categories';
import Homepage from './Homepage';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Categories/>
    </div>
  );
}

export default App;
