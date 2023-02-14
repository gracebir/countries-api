import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';

function App() {
  const [theme, setTheme] = useState("light")

  console.log(theme)
  useEffect(()=> {
    if(theme === "dark"){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[theme])
  return (
    <div className='h-screen bg-bgLight dark:bg-bgDark'>
      <NavBar theme={theme} setTheme={setTheme}/>
    </div>
  );
}

export default App;
