import styled from "styled-components"
import {device} from "../../GlobalStyle/BreakPoints"

export const ContainerCards = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
align-content: center;
@media ${device.tabletS}{
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
}

`