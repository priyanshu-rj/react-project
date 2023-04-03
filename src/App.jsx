import React from 'react';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Nav from './Nav';
import Navbar from './Navbar';
import All from './All';
const App = () =>{
    return(
        <>
        <Nav/>
        <Routes>
            <Route path="/" Component={Navbar} />
        </Routes>
 
        <Routes>
            <Route path="/about" Component={About} />
        </Routes>
        <Routes>
            <Route path="/contact" Component={Contact} />
        </Routes> 
        <Routes>
            <Route path="/all" Component={All} />
        </Routes> 
        </>
    )
};  

export default App;
