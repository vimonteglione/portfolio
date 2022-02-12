import './about.css'
import CV from "../../img/Vinicius-Monteglione-CV.pdf"

const About = () => {
    return (
        <div className="a" id="about">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://via.placeholder.com/360x640" alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">Sobre mim</h1>
                <p className="a-sub">

                </p>
                <p className="a-desc">
                    Além de desenvolvedor web, sou graduando em Engenharia de Computação na Universidade Federal de Itajubá (UNIFEI) e faço parte da Black Bee Drones, 
                    a primeira equipe de drones autônomos da América Latina, atuando na área de software. Nela, tenho contato com diversas tecnologias, 
                    como visão computacional e inteligência artificial. Na faculdade, estou no 4º ano - 7º semestre <a href={CV} target="_blank">(ver currículo completo)</a>.
                </p>
                <p className="a-desc">
                    
                </p>
            </div>
        </div>
    )
}

export default About