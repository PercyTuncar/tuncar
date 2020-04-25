import React from "react"
import BlogCard from "../Molecules/BlogCard"
import withLoader from "../HOC/withLoader";
import BackgroundVideo from '../Organisms/BackgroundVideo'


const BlogGrid = ({courses}) => (
    <>
         <BackgroundVideo/>
        <div className="ed-grid m-grid-4 cursos-top">
            { 
            courses.map(c => (
                <BlogCard
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

export default  withLoader("courses")(BlogGrid) 