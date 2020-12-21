import React, { Component } from "react"
import Banner from "../Organisms/Banner";
import axios from "axios";
import { Link } from 'react-router-dom'
import WorkTools from "../Organisms/WorkTools";
import Courses from "./Courses";

class Home extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            services: []
          }
    }
    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/PercyTuncar/services/services')
        .then (resp => this.setState({
            services: resp.data
        }))
        console.log("El resultado dec " + this.services)
    }
    render(){
        const { services } = this.state

        return(
            <>
            <Banner />
            <div className="services_title"><h1>Ahora quiero saber, ¿En qué puedo ayudarte?</h1></div>
            <div className="ed-grid m-grid-3 cursos-top"> 
                    {this.state.services.map((services) => {
                        return (
                            <article className="card" key={services.id} >
                            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">

                                <Link to={`/services/${services.id}`}>
                                <img src={services.image} alt={services.title} />
                                </Link>)
                            </div>
            
                            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                            <h3 className="center">{services.title}</h3>
                            <div className="s-main-center">
                                { services.description }
                            </div>
                            <div className="s-main-center">
                                <a className="button--ghost-alert button--tiny" href="https://ed.team">{ `${services.price}`} </a>
                            </div>
                            </div>
                        </article>
                        )
                    })}
            </div>

            <WorkTools/>
            <Courses/>
          
            </>
        )
    }
  
}

export default Home