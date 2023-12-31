import styled from "styled-components";
export const Portfolio = styled.main`
 background-color: #247ba0;
`
export const SkillSection = styled.section`
    background-color: #247ba0;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 50%;
    margin: 0 auto;

div{
    width: 100%; 
    height: 100%; 
    margin: 10px;
}

img{
    width: 60%;
    height: 80%;
}

@media (max-width: 920px) {
    width: 80%;
    height: 100%;  
div{
    width: 100%; 
    height: 100%; 
    margin: -1%;
}
}
`
