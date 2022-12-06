import React from 'react';
import Categories from './Categories';
import Footer from './Footer';
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
      <Footer/>
    </div>
  );
}

export default App;
