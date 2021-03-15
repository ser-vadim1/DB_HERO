import styled from "styled-components"
import {device} from "../../GlobalStyle/BreakPoints"

export const WrapperForm = styled.div`
   margin-top: 20px;
   display: flex;
   /* margin: 0 auto; */
   flex-direction: column;
   width:100% ;
   border: 1px solid black;

   @media ${device.tablet}{
   max-width: 600px;
}
`
export const WrpapperAvatarHero = styled.div`
/* margin-left: 10px; */
margin-top: 10px;
width: 120px;
height: 120px;
border-radius: 50%;
align-self: center;
border: 2px solid black;
`
export const AvartarImg = styled.img`
display: block;
border-radius: 50%;
height: 120px;
width: 120px;
object-fit: cover;
`
export const Label = styled.label``;

export const WrapperFormAddAvatar = styled.form`
align-self: center;
display: flex;
margin-left: 10px;
${Label}:not(:first-child){
   padding-left: 20px;
}
`;



export const InputIcon = styled.input`
  display: none;
`;

export const UploadAvatar = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 150px;
height: 30px;
font-weight: bold;
font-size: 1.6em;
text-align: center;
color: white;
background-color: #4457fc; 
cursor: pointer;
margin-top: 10px;
`
export const WrapperBlank = styled.div`
display: flex;
flex-direction: column;
flex-grow: 2;
`

export const MainForm = styled.form`
display: flex;
margin-top: 10px;
flex-direction: column;
/* flex-grow: 2; */

`

export const TitleDiscrip = styled.h2`
font-weight: bold;
font-size: 2em;
text-align: center;
`
export const TextArea = styled.textarea`
width: 90%;
height: 40px;
outline: none;
border: none;
border-bottom: 3px solid #4457fc;
text-align: center;
font-weight: bold;
resize: none;
overflow-x: hidden;
scrollbar-width: thin;
   scrollbar-color: #4457fc #C2D2E4;
   &::-webkit-scrollbar-thumb {
    background-color: #4457fc;
    border-radius: 5px;
  }
  &::-webkit-scrollbar {
    width: 6px;
  }
`

export const WrapperForButton = styled.div`
display: flex;
align-self: center;
justify-content: space-around;
width: 300px;
padding-bottom: 20px;
`
export const ButtonSave = styled.button`
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
width: 100px;
height: 30px;
border: none;
font-family: 'Amatic SC', cursive;
font-weight: bold;
font-size: 1.6em;
color: white;
background-color: #4457fc; 
cursor: pointer;
outline: none;
`
export const BlockDiscrip = styled.div`
display: flex;
height: 18%;
flex-direction: column;
align-items: center;
margin-top: 10px;
/* border: 1px solid black; */
`

export const ErrorInfo = styled.p`
align-self: center;
font-weight: bold;
color: red;
font-size: 1.5em;
margin-left: 10px;
`