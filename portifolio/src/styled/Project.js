import styled from "styled-components"

export const ProjectContainer = styled.section`
    background-color: #1b98e0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
    overflow: hidden;
    width: 100%;
  

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
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 2rem;
    div{
        background-color: #e8f1f2 ;
      
    
    }
    `

export const SectionProject = styled.div`
    width: auto;
    max-width: 180rem;
    height: auto;
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
}
 img{
    width: 70%;
    height: auto;

}
p{
    display: flex;
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
    /* max-width: 100%; */
      button{
        margin-bottom: -10%;
        font-size: 10%;
      }

      p{
        display: none;
      }
   }


`