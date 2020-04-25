import React from "react"
import ServicesCard from "../Molecules/ServicesCard";



const ServicesGrid = ({services})  => (
      <>
     <div className="services_title"><h1>Ahora quiero saber, ¿En qué puedo ayudarte? xd </h1></div>
     <div className="ed-grid m-grid-4 cursos-top">
         { 
         services.map(c => (
             <ServicesCard
                 key={c.id}
                 id={c.id}
                 title={c.title}
                 image={c.image}
                 price={c.price}
                 description={c.description}
             />))   
         }
     </div>
 </>
)

export default ServicesGrid 