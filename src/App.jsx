import React from "react";
import Header from "./components/header";
import AboutMe from "./pages/aboutMe";
import Proyectos from "./pages/proyectos";

const App = () => { 

    return (
        <div className="app">
            <Header />
            <AboutMe />
            <Proyectos />     
        </div>
    );


}

export default App;