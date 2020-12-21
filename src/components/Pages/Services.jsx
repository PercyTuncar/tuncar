import React, { Component } from "react"
import axios from "axios";
import ServicesGrid from "../Organisms/ServicesGrid";
import WeWorking from "../Organisms/WeWorking";

class Services extends Component {

    constructor(props) {
      super(props)
      this.state = {
        services: []
      }
    }
    componentDidMount() {
      axios.get('https://my-json-server.typicode.com/PercyTuncar/services/services')
      .then(resp => this.setState({
        services: resp.data
      }))
    }
    render() {
      const { services } = this.state
  
      return( 
      <>
      <WeWorking/>
      <ServicesGrid services={services} />
      </> 
      )
    }
    
  }

  
export default Services