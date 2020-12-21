import React from 'react';
import "../styles/styles.scss"
import Form from "./Pages/Form"
import Blogs from './Pages/Blogs';
import Blog from "./Pages/Blog"
import Services from './Pages/Services';
import Service from "./Pages/Service"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MainMenu from './Organisms/MainMenu'
import History from './Pages/History'
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Courses from './Pages/Courses';
import Course from "./Pages/Course"
import '../styles/Style.css'
import Video from './Pages/Video';

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/projects" exact component={ Projects } />
      <Route path="/services/:id" component={Service}/>
      <Route path="/services" component={ Services } />
      <Route path="/blog/:id" component={ Blog } />  
      <Route path="/blog" component={ Blogs } />  
      <Route path="/cursos/:id" component={ Course } />  
      <Route path="/cursos" component={ Courses } />  
      <Route path="/historial/:valor" component={ History } />  
      <Route path="/historial" component={ History } /> 
      <Route path="/video" component={ Video } /> 
      <Route path="/formulario" component={ () => <Form name="Página de contacto" /> } />
      <Route component={() => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Página no encontrada</span>  
        </div>
      )} />  
    </Switch> 
  </Router>
)

export default App;
