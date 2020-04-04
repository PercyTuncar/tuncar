import React from "react"
import CourseCard from "../Molecules/CourseCard"
import withLoader from "../HOC/withLoader";
import Banner from './Banner'

const CourseGrid = ({courses}) => (
    <>
        <Banner/>
        <div className="ed-grid m-grid-4 cursos-top">
            { 
            courses.map(c => (
                <CourseCard
                    key={c.id}
                    id={c.id}
                    title={c.titulo}
                    image={c.image}
                    price={c.price}
                    professor={c.professor}
                />))   
            }
        </div>
    </>
)

export default  withLoader("courses")(CourseGrid) 