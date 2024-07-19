import Header from './components/header';
import Intro from './components/Home/intro';
import Works from './components/Works/works';
import Timeline from './components/journey/timeline';
import { createContext, useState } from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';
export const boolContext = createContext();

function App() {
  const [bool, updateBool] = useState(false);
  const location = useLocation();
  console.log(location);

  return (
    <boolContext.Provider value={{bool, updateBool}}>
      <div style={{backgroundImage: "url('portfolioBg.png')"}} className={`h-[100vh] w-[100vw] flex flex-col justify-between bg-contain bg-center ${location.pathname === '/work' ? 'max-[800px]:w-[100%] max-[800px]:h-full' : ''}`}>
        <Header/>
        <Routes>
          <Route path='' element={<Intro/>}/>
          <Route path='/home' element={<Intro/>}/>
          <Route path='/work' element={<Works/>}/>
          <Route path='/journey' element={<Timeline/>}/>
          <Route path='/resume' element={<Intro/>}/>
          <Route path='/contact' element={<Intro/>}/>
        </Routes>
      </div>
    </boolContext.Provider>
  );
}

export default App;
