
const Landing = () => {
    return (
        <div>
            <div className="banner">
                <p > Modulo:7 DESARROLLO FRONT END CON REACTJS </p>
            </div>
            <div className="title">
                <p className="line" >Bienvenido</p> 
            </div>
            <div className="description">
                <p>Este módulo se centra en el uso de <span className="bold">React</span>, incluyendo la creación de <span className="bold">componentes</span>, el manejo
                de hooks, y el uso de <span className="bold">Redux.</span></p>
            </div>
            <div className="title">
                <p className="line" >Temas cubiertos</p> 
            </div>
            <div className="flex-container">
                <div className="column">
                    Componentes funcionales y clases
                </div>
                <div className="column">
                    Uso de <span className="bold">React hooks</span> como useState y useEffect
                </div>
                <div className="column">
                    Creación de <span className="bold">custom hooks</span> como useForm
                </div>
                <div className="column">
                    Gestión de variables de estado con <span className="bold">useState</span>
                </div>
                <div className="column">
                    Gestión de estado global con <span className="bold">Redux</span>
                </div>
                <div className="column">
                    Integración de <span className="bold">Redux</span> con <span className="bold">React</span>
                </div>
                <div className="column">
                    Manejo de <span className="bold">Formularios</span> con <span className="bold">React</span>
                </div>
                <div className="column">
                    Publicando nuestra <span className="bold">Página</span> con <span className="bold">GitHub Pages</span>
                </div>
            </div>
            <div className="title">
                <p className="line" >Recursos Adicionales</p> 
            </div>
            <div className="description">
                Para profundizar en los temas cubiertos, consulta los siguientes recursos:
            </div>

            <div className="line__footer"></div>
            <span className="text___fotter">
                    © 2024 Modulo 7, USIP. 
            </span>

        </div>
        

    )
}
export default Landing;