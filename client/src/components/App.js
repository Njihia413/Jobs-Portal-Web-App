import React from 'react';
import Categories from './Categories';
import Homepage from './Homepage';
import JobsList from './JobsList';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Categories/>
      <JobsList/>
    </div>
  );
}

export default App;
