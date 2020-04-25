  
import React, { useState, useEffect } from "react"
import axios from "axios";
import useService from "../CustomHooks/useService";

const Service = ({ match }) => {

    const [comment, setComment] = useState("Sin comentarios")
    const service = useService(match.params.id) 

    const myComment = e => {
      setComment(e.target.value)
    }

    return (
        <div className="ed-grid m-grid-3">
        {
            service ? (
                <div className="ed-grid">
                    <div className="ed-grid l-block">aqui la imagen de services
                      <h1 className="m-cols-3"> { service.title } </h1>
                      <img className="m-cols-1" src={ service.image } alt={service.titulo}/>
                      <p className="m-cols-2">Profesor: {service.description} </p>
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

export default Service