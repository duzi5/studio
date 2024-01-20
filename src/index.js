import React from 'react';
import "./index.scss"
import ReactDOM from 'react-dom';
import Take01 from './components/Take01/Take01'; // Add the missing import statement for the 'Take01' component
import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger';
function App() {
    
    gsap.registerPlugin(ScrollTrigger)
    return (
        <div id="app">
                <Take01 />
                <div className='espaco'></div>
                <div className='espaco'></div>
                <div className='espaco'></div>
                <div className='espaco'></div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));