import styled from "styled-components"

export const Main = styled.div`
   background-color: #1b98e0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LandingContainer = styled.div`
    margin: -1% -2% 0% -2%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: relative;

    @media (max-width: 920px) {
      flex-direction: column-reverse;
   }
`

export const LandingLeft = styled.div`
    flex: 10% 1;
    height: 100%;
    width: 100%;
    display: flex;
    align-items:flex-end;
    justify-content: flex-start;
    background-color: #e8f1f2;

    @media (max-width: 920px) {
      display: none;
   }
    

`
export const MyImage = styled.img`
    --img-size: 200px;
    position: relative;
    left: 35%;
    bottom: 35%;
    transform: translateX(44%);
    width:  var(--img-size);
    height: var(--img-size);
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
    transition: opacity 0.3s;

    @media (max-width: 920px) {
      margin: 1rem auto;
   }
`


export const ContainerLink = styled.div`
   display :flex ;
   align-items: center;
   justify-content: flex-start;

   a{
    height: 100%;
    text-decoration: none;
    font-size: 35px;
    margin: 0 0.5rem;
    transition: transform 0.5s;
}
    img{
    width: 50%;
    box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
    border-radius: 20%;
   }
   @media (max-width: 920px) {
      display :flex ;
      align-items: center;
   }
`

export const LandingRight = styled.div`
    flex: 65% 1;
    height: 100%;
    background-color: #247ba0;
    /* background-color: #1b98e0; */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;


   div{
    width: 60%;
    margin-right: 7rem;
    font-family: var(--primaryFont);
    font-size: normal;
   }

   h2{
    font-weight: 800;
    font-size: 2.25rem;
    margin-bottom: -0.85rem;
    opacity: 0.8;
    color: #e8f1f2;
   }
   h1{
    font-weight: 1000;
    font-size: 4.25rem;
    line-height: 110%;
    margin: 1rem 0;
    color: #e8f1f2;
   } 
   
   p{
    margin-top: 1.45rem;
    font-weight: 500;
    font-size: 1.15rem;
    color: #e8f1f2;
   }
   @media (max-width: 920px) {
      width: 100%;
      align-items: flex-start;

      div {
         margin-right: 0;
      }
      h2{
        font-weight: 800;
        font-size: 1.95rem;
        opacity: 0.8;
        }
      h1{
        font-weight: 900;
        font-size: 3.20rem;
        line-height: 90%;
        margin: 1rem 0;
        } 
   }
   `
// Media Query
// export const MediaQueryStyles = styled.div`
//    @media only screen and (max-width: 920px) and (max-width: 523px) {
//       ${LandingRight} {
//          flex-direction: row-reverse;
//          align-items: flex-start;
//          justify-content: flex-start;
//       }

//       ${LandingLeft} {
//          display: none;
//       }

//       ${MyImage} {
//          margin: 1rem;
//       }

//       ${LandingRight} {
//          width: 100%;
//          align-items: flex-start;

//          div {
//             margin-right: 0;
//          }
//       }
//    }
// `

// export const LandingRightWithMediaQuery = styled(LandingRight)`
//    ${MediaQueryStyles}
// `
 /* @media only screen and (max-width: 920px) and (max-height: 523px) {
      flex-direction: row-reverse;
      align-items: flex-start;
      justify-content: flex-start;

      ${LandingLeft} {
         display: none;
      }

      ${MyImage} {
         margin: 1rem;
      }

      ${LandingRight} {
         width: 100%;
         align-items: flex-start;

         div {
            margin-right: 0;
         }
      }
   } */