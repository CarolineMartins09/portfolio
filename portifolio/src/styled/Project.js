import styled from "styled-components"

export const ProjectContainer = styled.section`
    width: 95%;
    max-width: 100%;
    margin: 0 auto;
    background-color: #247ba0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;

header{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 1rem;
}
h1{
    margin-bottom: 40px;
    font-size: 3.5rem;
    font-family: var(--primaryFont);
    color: #e8f1f2;
}
`

export const ProjectBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

export const BodyContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 1rem;
 
    
div{
    background-color: #e8f1f2 ;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    
}

@media (max-width: 932px) {
    display: grid;
    grid-template-columns: 1fr;

div{
    width: 90%;
    max-width: 95%;
    margin: 0 auto;
}
}
`

export const SectionProject = styled.div`
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;

div{
       
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2{
    font-family: var(--familyFont);
    font: normal;
    font-weight: 600;
    font-size: 1.525rem;
    text-align: center;
    font-style: italic;
    font-style: oblique;
}
 img{
    width: 75%;
    height: 0%;

}
p{
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: var(--familyFont);
    font: normal;

}
button{
  margin-bottom: 10%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 4% 5%;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  background-color: #1b98e0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #6495ED;
}
button:active {
  background-color: #cc0000;
}
   
@media (max-width: 920px) {
    width: 100%;
    max-width: auto;
    height: 80%;

p{
    width: 100%;
}

}
@media (max-width: 1920px){ 
  
div[variant="4cars"]{
    margin-bottom: -4%;
}
}
@media (max-width: 1624px){

div{
    margin-bottom: -8%;
}
}
@media (max-width: 1280px){

div[variant="labex"]{
    margin-bottom: -1%;
}
}
`
