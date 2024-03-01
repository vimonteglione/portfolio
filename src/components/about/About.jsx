import './about.css'
import CV from "../../img/Vinicius-Monteglione-CV.pdf"

const About = () => {
    return (
        <div className="a" id="about">
            {/* <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                </div>
            </div> */}
            <div className="a-left">
                <h1 className="a-title">Sobre mim</h1>
                <p className="a-sub">
                </p>
                <p className="a-desc">
                    Me chamo Vinícius Monteglione, sou graduado em Engenharia de computação pela Universidade Federal de Itajubá, 
                    na qual estudei de 2019 até 2023. Além de desenvolvedor Web, sou desenvolvedor de 
                    software Júnior na empresa Bentley Systems, em que trabalho com o time e clientes 
                    do Reino Unido. Na universidade, participei da Black Bee Drones, primeira equipe de 
                    drones autônomos da América Latina, e do PET-TEC (Programa de Educação Tutorial - Tecnologia em Eletrônica e Computação). 
                    Neles, tive contato com diversas tecnologias, como visão computacional, inteligência artificia e desenvolvimento web/mobile.
                </p>
                <div className="a-buttons-container">
                    <p className="a-buttons-row">
                        <button className="a-desc-button"><i className="fa-regular fa-file-pdf"></i><a href={CV} target="_blank" rel="noreferrer"> Currículo</a></button>
                    </p>
                    <p className="a-buttons-row">
                        <button className="a-desc-button"><i className="fab fa-linkedin"></i><a href="https://www.linkedin.com/company/bentley-systems/about/" target="_blank" rel="noreferrer"> Bentley Systems</a></button>
                        <button className="a-desc-button"><i className="fab fa-linkedin"></i><a href="https://www.linkedin.com/company/blackbeedrones/" target="_blank" rel="noreferrer"> Black Bee Drones</a></button>
                        <button className="a-desc-button"><i className="fab fa-linkedin"></i><a href="https://www.linkedin.com/company/pettec-unifie/about/" target="_blank" rel="noreferrer"> PET-TEC</a></button>
                    </p>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">Habilidades <i className="fa-solid fa-code"></i></h1>
                <div className="a-habilidades">
                    <i className="fa-brands fa-java"></i>
                    <i className="fa-brands fa-js"></i>
                    <i className="fa-brands fa-react"></i>
                    <i className="fa-brands fa-angular"></i>
                    <i className="fa-brands fa-html5"></i>
                    <i className="fa-brands fa-css3-alt"></i>
                    <i className="fa-brands fa-python"></i>
                    <i className="fa-solid fa-c"></i>
                    <i className="fa-brands fa-node-js"></i>
                    <i className="fa-solid fa-database"></i>
                    <i className="fa-brands fa-aws"></i>
                </div>
            </div>
            
        </div>
    )
}

export default About