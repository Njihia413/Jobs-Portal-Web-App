import React from 'react';
import Categories from './Categories';
import Homepage from './Homepage';
import JobsList from './JobsList';

function App() {
  return (
    <div className="App">
      <Homepage/>
      <Categories/>
      <JobsList/>
    </div>
  );
}

export default App;
