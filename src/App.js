import Header from './components/header';
import Intro from './components/Home/intro';
import Works from './components/Works/works';
import { createContext, useState } from 'react';

import { Routes, Route } from 'react-router-dom';
export const boolContext = createContext();

function App() {
  const [bool, updateBool] = useState(false);

  return (
    <boolContext.Provider value={{bool, updateBool}}>
      <div style={{backgroundImage: "url('portfolioBg.png')"}} className="h-[100vh] w-[100vw] flex flex-col justify-between bg-contain bg-center">
        <Header/>
        <Routes>
          <Route path='' element={<Intro/>}/>
          <Route path='/home' element={<Intro/>}/>
          <Route path='/work' element={<Works/>}/>
          <Route path='/journey' element={<Intro/>}/>
          <Route path='/resume' element={<Intro/>}/>
          <Route path='/contact' element={<Intro/>}/>
        </Routes>
      </div>
    </boolContext.Provider>
  );
}

export default App;
