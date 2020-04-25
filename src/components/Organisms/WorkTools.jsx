import React, {Component} from 'react'

class WorkTools extends Component {
render(){
    return(
        <>
        <div className="services_title"><h1>¿Qué tecnologias uso?</h1></div>
        <p className="slideUp s-center"> <span className="t4 s-mb-0 s-center"> My Works Tools </span> 
         Aquí te dejo algunas herramientas que uso tanto para Desarrollo, Marketing y Edición fotográfica.</p>

         <div className="ed-container s-center worktools">
            <div className="ed-item s-1-3">
                <article className="card">
                    <div className="img-logo">
                    <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt=""/>
                    </div>
                    <h3 className="t5 s-mb-2 s-center">
                    React JS
                    </h3>
                    <span className="small">
                    React me permite crear interfaces de usuario. 
                    </span>
                </article>
            </div>
            <div className="ed-item s-1-3">
                <article className="card">
                    <div className="img-logo">
                    <img src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" alt=""/>
                    </div>
                    <h3 className="t5 s-mb-2 s-center">
                    Firebase
                    </h3>
                    <span className="small">
                    Para el desarrollo y despliegue de mis aplicaciones web.
                    </span>
                </article>
            </div>
            <div className="ed-item s-1-3">
              <article className="card">
                    <div className="img-logo">
                    <img src="https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" alt=""/>
                    </div>
                    <h3 className="t5 s-mb-2 s-center">
                    GCP
                    </h3>
                    <span className="small">
                    Me permite crear, implementar y escalar aplicaciones.
                    </span>
              </article>
            </div>
        </div>
        <div className="ed-container s-center worktools tools_2">
           
           <div className="ed-item s-1-3">
           <article className="card">
                <div className="img-logo">
                <img src="https://cdn.worldvectorlogo.com/logos/creative-cloud-cc.svg" alt=""/>
                </div>
                <h3 className="t5 s-mb-2 s-center">
                Adobe CC
                </h3>
                <span className="small">
                    Softwares para la edición de fotos y vedeos
                </span>
                </article>
            </div>
          
            <div className="ed-item s-1-3">
                <article className="card">
                    <div className="img-logo">
                    <img src="https://cdn.worldvectorlogo.com/logos/zoho-1.svg" alt=""/>
                    </div>
                    <h3 className="t5 s-mb-2 s-center">
                    Ventas y marketing
                    </h3>
                    <span className="small"><p>Me permite adaptarlo a cada proceso empresarial</p></span>
                </article>
            </div>
            <div className="ed-item s-1-3">
                <article className="card">
                    <div className="img-logo">
                    <img src="https://cdn.worldvectorlogo.com/logos/figma-1.svg" alt=""/>
                    </div>
                    <h3 className="t5 s-mb-2 s-center">
                    <p>Figma</p>
                    </h3>
                    <span className="small">
                    <p>Para diseñar interfaces de usuario web y mobile. </p>
                    </span>
                </article>
            </div>
            
        </div>
        <div className="services_title"><h1>¿Te interesa aprender alguno?</h1></div>

        </>
    )
}
}

export default WorkTools