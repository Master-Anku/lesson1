// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Contact from './Contact';
import Photo from './Photo';
import PhotoCard from './PhotoCard';


function App() {
  return (
    <div className="App">
      <Header/> 
      
     
      <Content/>
      <Photo/>
      <PhotoCard/>
      <Contact/>

      <Footer/>

    </div>

    
  );
}


export default App;
