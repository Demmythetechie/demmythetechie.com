import Header from './components/header';
import Intro from './components/Home/intro';
import Service from './components/Services/services';
import Works from './components/Works/works';

import { Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <div style={{backgroundImage: "url('portfolioBg.png')"}} className="h-[100vh] w-[100vw] flex flex-col justify-between bg-contain bg-center">
      <Header/>
      <Routes>
        <Route path='' element={<Intro/>}/>
        <Route path='/home' element={<Intro/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/work' element={<Works/>}/>
        <Route path='/resume' element={<Intro/>}/>   
        <Route path='/contact' element={<Intro/>}/>
      </Routes>
    </div>
  );
}

export default App;
