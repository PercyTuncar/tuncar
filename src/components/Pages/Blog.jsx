  
import React, { useState, useEffect } from "react"
import axios from "axios";
import useBlog from "../CustomHooks/useBlog";
import WeWorking from "../Organisms/WeWorking";

const Blog = ({ match }) => {

    const [comment, setComment] = useState("Sin comentarios")
    const blog = useBlog(match.params.id) 

    const myComment = e => {
      setComment(e.target.value)
    }

    return (
        <div className="ed-grid m-grid-3">
          <WeWorking/>
        {
            blog ? (
                <div className="ed-grid">
                    <div className="ed-grid l-block">aqui la imagen 
                      <h1 className="m-cols-3"> { blog.titulo } </h1>
                      <img className="m-cols-1" src={ blog.image } alt={blog.titulo}/>
                      <p className="m-cols-2">Profesor: {blog.profesor} </p>
                    </div>
                    <div className="ed-grid">
                      <h2>Escribe tu comentario</h2>
                      <input type="text" placeholder="Escribe ..." onChange={myComment.bind(this)}/>
                      <p>{comment}</p>
                    </div>
                </div>
                ) : 
                 <h1>El curso no existe</h1>        
        }
        </div>
    )
}

export default Blog