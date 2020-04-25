import React from "react"
import Typical from 'react-typical'
import '../../styles/wickedcss.min.css'

const Banner = () => (
 
  <div className="main-banner img-container" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
      <div className="main-banner__data s-center ">
        <div className="img_perfil slideDown"><img src="https://pbs.twimg.com/profile_images/1213100417371951105/MqVid6VT_400x400.jpg" alt=""/></div>
        <p className="t4 s-mb-0">Hey! I'm</p>
        <h1> <p className="t2 s-mb-0"> Percy Tuncar </p> </h1> 
        <h2>
          
            <Typical
          steps={["I'm a Web Designer!", 600, "I'm a Frontend Developer!", 600, "I'm a photographer!", 600]}
          loop={Infinity}
          wrapper="p"
            />
       
       </h2>
        <h3><p className="t3 s-mb-0 slideUp" id="title">¿Qué puedo hacer por tu empresa?</p></h3>
        <p className="slideUp">Mi objetivo principal es impulsar la imagen de tu empresa
           en internet mediante diferentes estrategias online busco mejorar
            tu marca para que puedas obtener clientes ptenciales.</p>
        <a href="#" className="button slideUp">Contactar</a>
      </div>
    </div>
  </div>
</div>

)

export default Banner