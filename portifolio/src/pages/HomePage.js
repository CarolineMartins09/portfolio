import { useNavigate } from "react-router-dom";
import imagemLinkedin from "../image/icons8-linkedin-ios-16-filled-144.png"
import imagemGithub from "../image/github.png"
import imagemEmail from "../image/email.jpg"
import labex from "../image/LABEX-RESPONSIVO.png"
import ifuture from "../image/tablet_phone_ifuture.png"
import { Description, Main, Email, Github, Linkedin } from "../styled/homeStyled";

function Home() {
    // const navigate = useNavigate();
    return (

        <Main>


            <section>
                <Description>
                    
                        <h1>FullStack</h1>
                    
                    <a href="https://www.linkedin.com/in/caroline-martins-06421020a/">
                        <Linkedin src={imagemLinkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/CarolineMartins09">
                        <Github src={imagemGithub} alt="GitHub" />
                    </a>
                    <a href="https://caroline.martins.soares09@gmail.com">
                        <Email src={imagemEmail} alt="E-mail" />
                    </a>
                </Description>
             
                    <h1>Developer</h1>
               

            </section>

            <section>
                <div>
                    <img src={labex} alt="Projeto Labex" />
                </div>
                <div>
                    <img src={ifuture} alt="Projeto labefood" />
                </div>
            </section>
        </Main>
    )
}

export default Home;