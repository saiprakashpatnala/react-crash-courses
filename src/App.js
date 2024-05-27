import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import CourseDetails from './components/CourseDetails';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses/:id' element={<CourseDetails/>}/>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
    </div>
  );
}

export default App;
