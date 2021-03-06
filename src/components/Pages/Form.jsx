import React, {Component} from "react"
import WeWorking from "../Organisms/WeWorking"

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            correo: "",
            fecha: new Date()
        }

        this.changeName = this.changeName.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
    }

    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    cambiarCorreo(e) {
        this.setState({
            correo: e.target.value
        })
    }

    cambiarFecha() {
        this.setState({
            fecha: new Date()
        })
    }

    render() {
        return (
            <div className="ed-grid">
                <WeWorking/>
                <h1>Formulario {this.props.name}</h1>
                <h2><a href="https://www.instagram.com/percy_tuncar/" className="btn btn-default">Mi Instagram</a></h2>
                <h2><a href="https://www.facebook.com/tuncar123" className="btn btn-default">Mi Facebook</a></h2>
                <h2><a href="http://tuncar.us" className="btn btn-default">Mi Sitio Web</a></h2>

                <h4>Fecha actual: {Math.ceil(this.state.fecha/1000)}</h4>
                <form id="form-element">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre completo</label>
                            <input
                                type="text"
                                onChange={this.changeName} 
                            />
                        </div>
                        <div className="form__item">
                            <label>Correo Electrónico</label>
                            <input 
                                type="email"
                                onChange={this.cambiarCorreo}
                            />
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>
            </div>
        )
    }
    
    
    componentDidMount() {
        let element = document.getElementById("form-element")
        console.log(element)


        this.intervaloFecha = setInterval(() => {
            this.cambiarFecha()
            console.log(new Date())
        }, 1000)    

    }

    componentDidUpdate(prevProps, prevState) {
        //console.log(prevState)
    }

    componentWillUnmount() {
        clearInterval(this.intervaloFecha)
    }


}

export default Form