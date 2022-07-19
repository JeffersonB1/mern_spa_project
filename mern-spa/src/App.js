import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/LogIn';

function App() {
  const [contactSelected, setContactSelcted] = useState(false)
  const [loginSelected, setLoginSelected] = useState(false)
  const [aboutSelected, setAboutSelected] = useState(false)
  return (
    <div className="App">
      <Nav
        setLoginSelected={setLoginSelected}
        setContactSelcted={setContactSelcted}
        setAboutSelected={setAboutSelected}
      ></Nav>
      <main>
        {!loginSelected ? (
          <>
          </>
        ) : (
          <Login></Login>
        )}

        {!contactSelected ? (
          <>
          </>
        ) : (
          <Contact></Contact>
        )}

        {!aboutSelected ? (
          <></>
        ) : (
          <About></About>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
