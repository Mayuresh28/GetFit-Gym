// import './App.css';
// import Header from './components/header'
// import Card from './components/card'

// function App() {
//   return (
//     <div>
//       <Header/>
// <Card/>
// <Card/>

// <Card/>
//     </div>
//   );
// }

// export default App;
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">

        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      
    </div>
  );
}

export default App;

//import React from 'react'

//rules of jsx:
// 1 . All the contents shold be wrapped in single container tag
//2 . tags should be ended such as h1,p
// 3. All the components should be render in app.js and stored in diffrent folder within src
