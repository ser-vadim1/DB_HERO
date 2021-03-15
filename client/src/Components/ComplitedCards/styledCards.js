import styled from "styled-components"
import {Link} from "react-router-dom"
import {device} from "../../GlobalStyle/BreakPoints"





export const WrapperOfCard = styled.div`
margin-top: 20px; 
position: relative;
max-width: 100%;
height: 600px; 
/* margin-top: 50px; */
/* &:not(:first-child){
   margin-top: 30px;

   } */

/* background-color: white; */
/* border: 3px solid black; */
@media ${device.tabletS} {
max-width: 250px;
width: 250px;
height: 320px;
&:not(:first-child){
   margin-left: 10px;
   /* margin-top: 0px; */
   }
}
`
export const WrapperImage = styled(WrapperOfCard)`
border-radius: ${({isBorder})=> isBorder ? '10px' : ""};
background-color: #dddce8;
border:  ${({isBorder})=> isBorder ? '1px solid black' : ""};
`
export const ImgHero = styled.img`
display: block;
height: auto;
width: 100%;
height: 100%;
border-radius: 10px;
object-fit: cover;
cursor: pointer;
`


export const InfoBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(58,58,58,0.8);
position: absolute;
border-radius: 10px;
top: 100%;
transform: translateY(-100%);
width: 100%;
height: 15%;
font-family: 'Amatic SC', cursive;
color: #fff;
font-size: 2em;
`
export const LinkImg = styled(Link)``
export const WraperTime = styled.div`
/* border: 1px solid black; */
display: flex;
justify-content: center;
`
export const P_time = styled.p`
font-weight: bold;
font-size: 1.4em;
margin-top: 0px;
font-family: 'Amatic SC', cursive;
`