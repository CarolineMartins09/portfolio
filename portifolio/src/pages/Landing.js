import React from "react";
import {
    Main,
    LandingContainer,
    LandingLeft,
    LandingRight,
    ContainerLink,
    MyImage
} from "../styled/LandingStyled";
import {
    ProjectContainer,
    BodyContainer,
    ProjectBody,
    SectionProject
} from "../styled/Project"
import { SkillSection, Portfolio } from "../styled/Skills";
import imagemLinkedin from "../image/icons8-linkedin-100.png"
import imagemGithub from "../image/icons8-github-100.png"
import my from "../image/Vana - Text to Image 2023-07-13-6_41_50PM 0.png"
import ProjetoLabefood from "../image/ifuture-mulduranova-removebg-preview.png"
import ProjetoLabex from "../image/LABEX-RESPONSIVO.png"
import Projeto4cars from "../image/4cars-removebg-preview.png"
import Js from "../image/icons8-js-100.png"
import Css from "../image/icons8-css-100.png"
import HTML from "../image/icons8-html-100.png"
import Reactjs from "../image/icons8-react-96.png"
import node from "../image/icons8-nodejs-96 (1).png"
import express from "../image/icons8-express-96.png"
function Landing() {


    return (
        <Portfolio>

            <Main>
                <LandingContainer>
                    <LandingLeft>
                        <MyImage src={my} />

                    </LandingLeft>

                    <LandingRight>
                        <div>
                            <h2>Olá, sou Caroline </h2>
                            <h1>Desenvolvedora</h1>
                            <p> Habilidosa, carismática e  apaixonada por programação,
                                com conhecimento em diversas tecnologias e foco em soluções inovadoras e eficientes.<br />
                                Palhoça- Santa Catarina📍</p>
                        </div>

                        <ContainerLink>
                            <a href="https://github.com/CarolineMartins09">
                                <img src={imagemGithub} alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/caroline-martins-06421020a/">
                                <img src={imagemLinkedin} alt="LinkedIn" />
                            </a>
                        </ContainerLink>

                    </LandingRight>

                </LandingContainer>

            </Main>

            <ProjectContainer variant="projectContainer">
                <SkillSection>
                    <div>
                        <img src={Reactjs} alt="REACT.JS" />
                    </div>
                    <div>
                        <img src={Js} alt="Javascript" />
                    </div>
                    <div>
                        <img src={HTML} alt="HTML" />
                    </div>
                    <div>
                        <img src={Css} alt="CSS" />
                    </div>
                    <div>
                        <img src={node} alt="Node.js" />
                    </div>
                    <div>
                        <img src={express} alt="Express" />
                    </div>
                </SkillSection>

                <header>
                    <h1>Projetos</h1>
                </header>
                <ProjectBody variant="projectBody">

                    <BodyContainer variant="bodyContainer">
                        <div>
                            <SectionProject>
                                <div variant="labefood">
                                    <p>Mobile delivery 100%: Design profissional por UI/UX.
                                        Prático e intuitivo!<br /> Faça novo acesso ou use o já cadastrado.<br />
                                        <b>Acesso: astrodev@gmail.com <br />senha: 123456</b>
                                    </p>
                                </div>
                                <h2>Labefood</h2>
                                <img src={ProjetoLabefood} alt = "Projeto Ifuture"/>
                                <div>

                                    <a href="https://hanging-fork.surge.sh/">
                                        <button> Acesso ao Site</button>
                                    </a>

                                </div>
                            </SectionProject>
                        </div>
                        <div>
                            <SectionProject>
                                <div variant="labex">
                                    <p>Site interplanetário: clientes candidatam-se por formulário, revisado pelo admin.

                                        <br /><b>Acesso:<br />caroline-martins-barros@astrodev.com <br />senha:123456<br /></b>
                                    </p>
                                </div>
                                <h2>Labex</h2>
                                <img src={ProjetoLabex} alt= "Labex"></img>
                                <div>

                                    <a href="https://tightfisted-space.surge.sh/">
                                        <button> Acesso ao Site</button>
                                    </a>

                                </div>
                            </SectionProject>
                        </div>
                        <div>
                            <SectionProject>
                                <div variant="4cars">
                                    <p>Site 4cars: Locação de veículos responsiva,  pensada e desenvolvida em grupo.
                                        Totalmente responsivo para melhor experiência em qualquer dispositivo.
                                        Melhor experiência em qualquer dispositivo.
                                    </p>
                                </div>
                                <h2>4Cars</h2>

                                <img src={Projeto4cars} alt = "Projeto 4cars"></img>
                                <div>
                                    <a href="http://dramatic-brush.surge.sh/index.html">
                                        <button> Acesso ao Site</button>
                                    </a>
                                </div>

                            </SectionProject>
                        </div>
                    </BodyContainer>
                </ProjectBody>

            </ProjectContainer>

        </Portfolio>
    )
}


export default Landing;