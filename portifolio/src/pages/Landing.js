import React from "react";
import { Main, LandingContainer, LandingLeft, LandingRight, ContainerLink, MyImage } from "../styled/LandingStyled";
import { ProjectContainer, BodyContainer, ProjectBody, SectionProject } from "../styled/Project"
import { SkillSection, Portfolio } from "../styled/Skills";
import imagemLinkedin from "../image/icons8-linkedin-100.png"
import imagemGithub from "../image/icons8-github-100.png"
import my from "../image/Vana - Text to Image 2023-07-13-6_41_50PM 0.png"
import ProjetoLabefood from "../image/tablet_phone_ifuture.png"
import ProjetoLabex from "../image/LABEX-RESPONSIVO.png"
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
                            com conhecimento em diversas tecnologias e foco em soluções inovadoras e eficientes.<br/>
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

            <ProjectContainer>
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
                <ProjectBody>
                    <BodyContainer>
                        <div>
                            <SectionProject>
                                <h2>Labefood</h2>
                                <p>Projeto realizado em grupo 100% mobile inspirado em serviços de 
                                    delivery de restaurantes, feito por um UI/UX designer profissional e 
                                    sendo replicado com suas devidas funcionalidades, projeto onde me
                                    destaquei pela organização, auxilio e liderança.</p>
                                <img src={ProjetoLabefood} />
                                <div>

                                    <a href="https://hanging-fork.surge.sh/">
                                        <button> Acesso ao Site</button>
                                    </a>

                                </div>
                            </SectionProject>
                        </div>
                        <div>
                            <SectionProject>

                                <h2>Labex</h2>
                                <p>100% responsivo para versão desktop e mobile. Site de viagens interplanetárias com acesso ADMIN onde 
                                    o cliente pode se candidatar a viagens e o ADMIN aprova-lo ou não podendo também criar novas viagens.<br/>
                                    <br/><b>acesso admin:  <br/>senha:<br/></b>
                                    </p>
                                <img src={ProjetoLabex}></img>
                                <div>

                                    <a href="https://hanging-fork.surge.sh/">
                                        <button> Acesso ao Site</button>
                                    </a>

                                </div>
                            </SectionProject>
                        </div>
                        <div>
                            <SectionProject>

                                <h2>labex</h2>
                                <p>100% responsivo para versão desktop e mobile. Site de viagens interplanetárias com acesso ADMIN onde 
                                    o cliente pode se candidatar a viagens e o ADMIN aprova-lo ou não podendo também criar novas viagens.<br/>
                                    <br/><b>acesso admin:  <br/>senha:<br/></b></p>
                                <img src={ProjetoLabex}></img>
                                <div>

                                    <a href="https://hanging-fork.surge.sh/">
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