import React from "react";
import { MainContainer } from "../../GlobalStyle/StyledMainContainer";
import {
  HedearWrapper,
  Typography,
  CustomLink,
} from "./styledMarkerIsNoneCards";

const MarkerIsNoneCards = () => {
  return (
    <HedearWrapper>
      <Typography>
        Now you dont have any the cards if you wanna to Creat own superHero
        click <CustomLink to="/createHero">here</CustomLink>
      </Typography>
    </HedearWrapper>
  );
};

export default MarkerIsNoneCards;
