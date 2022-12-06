import { Routes, Route }  from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import CreateJobForm from "./CreateJobForm";
import Footer from "./Footer";
import MainPage from "./MainPage";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-a-job" element={<CreateJobForm/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
