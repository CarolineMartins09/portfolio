import React from "react";
import { Main, LandingContainer, LandingLeft, LandingRight, ContainerLink, MyImage } from "../styled/LandingStyled";
import { ProjectContainer, BodyContainer, ProjectBody, SectionProject } from "../styled/Project"
import { SkillSection, Portfolio} from "../styled/Skills";
import imagemLinkedin from "../image/icons8-linkedin-100.png"
import imagemGithub from "../image/icons8-github-100.png"
import my from "../image/Vana - Text to Image 2023-07-13-6_41_50PM 0.png"
import ProjetoLabefood from "../image/tablet_phone_ifuture.png"
import ProjetoLabex from "../image/LABEX-RESPONSIVO.png"
import Js from "../image/icons8-js-48.png"
import Css from "../image/icons8-css-48.png"
import HTML from "../image/icons8-html-48.png"
import Reactjs from "../image/icons8-reagir-40.png"
import node from "../image/icons8-nodejs-48.png"
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
                            <h2>Caroline Martins</h2>
                            <h1>Desenvolvedora</h1>
                            <p>Loren ipsun</p>
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
                <header>
                    <h1>Projetos</h1>
                </header>
                <ProjectBody>
                    <BodyContainer>
                        <div>
                            <SectionProject>
                                <h2>Labefood</h2>
                                <p>Loren Ipsin sjbjhbanklnc</p>
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
                                <p>Loren Ipsin sjbjhbanklnc</p>
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
                                <p>Loren Ipsin sjbjhbanklnc</p>
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

            <SkillSection>
                <div>
                    <img src={Reactjs} alt="REACT.JS"/>
                </div>
               <div>
                    <img src={Js} alt="Javascript"/>
                </div>
                <div>
                    <img src={HTML} alt="Javascript"/>
                </div>
                <div>
                    <img src={Css} alt="Javascript"/>
                </div>
                <div>
                    <img src={node} alt="Javascript"/>
                </div>
            </SkillSection>
        </Portfolio>
    )
}


export default Landing;