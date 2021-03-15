import {device} from "../../GlobalStyle/BreakPoints"
import styled,{keyframes} from "styled-components"
import {Link} from 'react-router-dom'
import BannerHeader from "../../Assets/superHeroDb_isEmptyCards.jpg"

export const ContainerHeader = styled.div`
display: flex;
flex-direction: column;

`


export const WrapperHeaderNav = styled.header`
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
margin: 0 auto;
background-color:  black;
@media ${device.tabletL}{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
}
`

export const ImgIconHedear = styled.img`
width: 40px;
height: 40px;
@media ${device.tabletL}{
   margin-left: 30px;

}
`


export const LinkNavigation = styled(Link)`
  outline: none;
  text-decoration: none;
  color: ${({isactive})=>isactive ? '#4457fc' :"white"};
  font-size: 1.5em;
  font-weight: bold;

  &:hover{
    color: #4457fc;
  }

`
export const NavHeader = styled.nav`
display: flex;


${LinkNavigation}:not(:first-child){
   padding-left: 20px;
}
@media ${device.tabletL}{
   margin-right: 30px;
}
`
export const WrapperBanner = styled.header`
display: flex;
justify-content: center;
align-items: flex-end;
color: white;
max-width: 100%;
height: 500px;
background-image: url(${BannerHeader});
background-size: cover;
background-repeat: no-repeat; 
background-position: center;
`