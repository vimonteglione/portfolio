import "./intro.css"

const Intro = () => {
    return (
        <div className="i" id="intro">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Olá, meu nome é</h2>
                    <h1 className="i-name">Vinícius Monteglione</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Programador</div>
                            <div className="i-title-item">Desenvolvedor Web</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        Sou programador desenvolvedor web frontend e estou no quarto ano de Engeharia de Computação. Aqui você vai encontrar um pouco
                        do meu portfólio e do meu currículo. No final estão todos meus contatos, fique à vontade para me chamar :)
                    </p>
                    {/*<p className="i-nav">
                        <a href="#intro">INÍCIO</a> <a href="#productList">PORTFÓLIO</a> <a href="#about">SOBRE MIM</a> <a href="#contact"> CONTATO</a>
                    </p>*/}
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                
            </div>
            <i className="fa-solid fa-arrow-down i-arrow"></i>
        </div>
    )
}

export default Intro