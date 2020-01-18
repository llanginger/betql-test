import React from 'react';
import './App.css';
import { Ticker } from './components/Ticker/Ticker';
import smoothscroll from 'smoothscroll-polyfill';

// Smooth scroll behavior polyfill to enable scrolling behavior across the board:
smoothscroll.polyfill();

function App() {
    return (
        <div className="App">
            <Ticker />
        </div>
    );
}

export default App;
