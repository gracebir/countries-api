import { useEffect, useState } from 'react';
import DropDown from './components/DropDow';
import NavBar from './components/NavBar';
import TextInput from './components/TextInput';

function App() {
  const [theme, setTheme] = useState("light")
  const [text, setText] = useState("Filter by Region");
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
      <div className='px-4 py-6 md:px-24 text-textLight dark:text-textDark space-y-4'>
        <TextInput/>
        <DropDown text={text} setText={setText}/>
      </div>
    </div>
  );
}

export default App;
