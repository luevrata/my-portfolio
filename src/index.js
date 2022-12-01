import React from "react";
import {render}  from "react-dom";
import App from './App'
import './index.css'
render(<App/>, document.querySelector("#root"))

// import React from "react";
// import {createRoot}  from "react-dom/client";
// import App from './App'
// import './index.css'
// const container = document.querySelector("#root")
// const root = createRoot(container)
// root.render(<App/>)

// import React from "react";
// import Header from "./components/header/Header";
// import Nav from "./components/nav/Nav";
// import About from "./components/about/About";
// import Experience from "./components/experience/Experience";
// import Projects from "./components/projects/Projects";
// import './index.css'

// const App =() => {

//     return(
//     <div>
//         <Header/>
//         <Nav/>
//         <About/>
//         <Experience/>
//         <Projects/>
//     </div>
//     )

// }

// export default App