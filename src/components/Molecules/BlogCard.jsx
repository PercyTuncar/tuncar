import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const BlogCard = ({id, title, image, price, professor}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/blog/${id}`}>
                <img src={image} alt={title} />
            </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <div className="s-main-center">
                { professor }
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="https://ed.team">{ `${price}`} </a>
            </div>
        </div>
    </article>
)

BlogCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string
}

BlogCard.defaultProps = {
    title: "No se encontró título",
    image: "http://www.ciudaddelapunta.com/sitio/fotos/ciudad/miniaturas/006.jpg",
    price: 0.00,
    profesor: ""
}

export default BlogCard