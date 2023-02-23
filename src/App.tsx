import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Countries from './pages/Countries';
import Country from './pages/Country';

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(()=> {
    if(theme === "dark"){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[theme])
  return (
    <div className='bg-bgLight dark:bg-bgDark'>
      <NavBar theme={theme} setTheme={setTheme}/>
      <div className='px-4 md:px-24 py-16 text-textLight dark:text-textDark'>
        <Routes>
          <Route path='/' element={<Countries/>}/>
          <Route path='/country/:name' element={<Country/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
