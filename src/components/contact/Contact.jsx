import { useRef, useState } from "react"
import "./contact.css"
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef();

    const [done, setDone] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();

        emailjs.sendForm('service_hjs6vcf', 'template_2sc5lal', formRef.current, 'user_gFKwn2X43urgfrbYfRwls')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
        });

    }

    return (
        <div className="c" id="contact">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Me chame!</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <a href="https://wa.me/5511985530353" target="_blank" rel="noreferrer"> <i className="fas fa-phone"></i> (11) 98553-0353</a>
                        </div>
                        <div className="c-info-item">
                            <i className="fas fa-envelope"></i> vimonteglione@hotmail.com
                        </div>
                        <div className="c-info-item">
                            <a href="https://www.linkedin.com/in/vin%C3%ADcius-monteglione-de-oliveira-232893230/" target="_blank" rel="noreferrer"> <i className="fab fa-linkedin"></i> Vinícius Monteglione de Oliveira</a>
                        </div>
                        <div className="c-info-item">
                            <a href="https://github.com/vimonteglione" target="_blank" rel="noreferrer"> <i className="fab fa-github"></i> vimonteglione</a>
                        </div>
                        <div className="c-info-item">
                            <a href="https://www.instagram.com/vimonteglione/" target="_blank" rel="noreferrer"> <i className="fab fa-instagram-square"></i> vimonteglione</a>
                        </div>
                        <div className="c-info-item">
                            <i className="fa-solid fa-location-dot"></i> SP, Brasil
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>O que você tem em mente?</b> Me chame para conversarmos sobre o seu projeto.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Nome" name="user_name"/>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <input type="text" placeholder="Assunto" name="user_subject"/>
                        <textarea name="message" id="" rows="5" placeholder="Mensagem"></textarea>
                        <button>Enviar</button>
                        {done && "  Mensagem enviada. Obrigado!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact