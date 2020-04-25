import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ServicesCard = ({id,title,image,price,description}) => (
   <>
   <article className="card">

            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/services/${id}`}>
                <img src={image} alt={title} />
            </Link>
            </div>

            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <div className="s-main-center">
                { description }
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="https://ed.team">{ `${price}`} </a>
            </div>
        </div>
    </article>


   </>
        
)


ServicesCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number
    
}

ServicesCard.defaultProps = {
    title: "No se encontró título",
    image: "http://www.ciudaddelapunta.com/sitio/fotos/ciudad/miniaturas/006.jpg",
    description: "",
    price: 0.00
    
}
export default ServicesCard