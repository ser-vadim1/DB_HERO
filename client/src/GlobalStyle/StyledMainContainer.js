import styled from "styled-components"
import {device} from "./BreakPoints"


export const MainContainer = styled.div`
max-width: 500px;
margin: 0 auto;
/* height: 100vh; */
border: 1px solid black;
margin-bottom: 20px;
margin-top: 0px;


@media ${device.tabletS}{
   max-width: 800px;
}
@media ${device.tablet}{
   display: flex; 
   flex-direction: column;
   align-items: center;
   max-width: 1200px;
}

@media ${device.laptop}{
   max-width: 1400px;
}
`