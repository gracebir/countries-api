// import React from 'react';
// import axios from 'axios';

import NavBar from "./components/NavBar";

function App() {
    // const [countries, setCountries] = React.useState([]);
    
    // React.useEffect(() => {
    //     axios.get('https://restcountries.com/v3.1/all')
    //         .then(res => {
    //             setCountries(res.data);
    //     })
    // }, [])
    
    return (
        <div>
           <NavBar/> 
        </div>
    );
}

export default App;
