import React, { Component } from "react"
import axios from "axios";
import BlogGrid from "../Organisms/BlogGrid";
import WeWorking from "../Organisms/WeWorking";

class Blogs extends Component {

  constructor(props) {
    super(props)
    this.state = {
      courses: []
    }
  }
  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/PercyTuncar/films/films')
    .then(resp => this.setState({
      courses: resp.data
    }))
  }
  render() {
    const { courses } = this.state

    return( 
    <>
    <WeWorking/>
    <BlogGrid courses={courses} />
    </> 
    )
  }
  
}

export default Blogs
