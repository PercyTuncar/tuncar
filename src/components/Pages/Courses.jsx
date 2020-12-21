import React, { Component } from "react"
import axios from "axios";
import CourseGrid from "../Organisms/CourseGrid";
import WeWorking from "../Organisms/WeWorking";

class Courses extends Component {

  constructor(props) {
    super(props)

    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    axios.get('http://my-json-server.typicode.com/betoquiroga/json-db/cursos')
    .then(resp => this.setState({
      courses: resp.data
    }))
  }

  render() {
    const { courses } = this.state

    return (
     <>
     <WeWorking/>
      <CourseGrid courses={courses} />
      
    </>
    )
  
  }
  
}

export default Courses