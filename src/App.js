import Header from './components/header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='font-webfont'>
      <Header/>
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
