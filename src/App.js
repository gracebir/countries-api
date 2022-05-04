import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Routes, Route} from 'react-router-dom'
import DetailCountry from "./components/Detail";
function App() {

    return (
        <div>
            <NavBar /> 
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="detail/:name" element={<DetailCountry/>}/>
            </Routes>
        </div>
    );
}

export default App;
