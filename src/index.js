import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CreateGlobalStyled } from './globalStyled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CreateGlobalStyled/>
        <App />
    </React.StrictMode>
);
