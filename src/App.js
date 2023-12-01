import Header from './components/header';
import Intro from './components/Home/intro';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="h-[100vh] w-[100%] bg-black">
      <Header/>
      <Intro/>
      <Routes>
        <Route path='/portfolio' element={<Header/>}/>
        <Route path='/resume' element={<Header/>}/>
        <Route path='/about' element={<Header/>}/>
        <Route path='/contact' element={<Header/>}/>
      </Routes>
    </div>
  );
}

export default App;
