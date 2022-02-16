// import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {
  const title ='welcome to the new blog';
  const likes=51;
  const link='https://www.google.com';
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path='/create' element={<Create/>}/>
          <Route path='blogs/:id' element={<BlogDetails/>}/>
          {/* <Route path="/quiz" element={<Quiz/>} /> */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
