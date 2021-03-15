import React from "react";
import { usePrepareLink } from "../../Hooks/usePrepareLink";
import {
  ContainerHeader,
  WrapperHeaderNav,
  ImgIconHedear,
  NavHeader,
  LinkNavigation,
  WrapperBanner,
} from "./styledHeaderNav";
import MainIcon from "../../Assets/MainIcon.png";
import { useLocation } from "react-router-dom";

const HeaderNav = () => {
  const location = useLocation();
  const CollectionLink = usePrepareLink({
    to: "/",
  });
  const About = usePrepareLink({
    to: "/about",
  });
  const CreateCard = usePrepareLink({
    to: "/createHero",
  });
  return (
    <ContainerHeader>
      <WrapperHeaderNav>
        <LinkNavigation to={CollectionLink}>
          <ImgIconHedear src={MainIcon} />
        </LinkNavigation>
        <NavHeader>
          <LinkNavigation
            to={CollectionLink}
            isactive={CollectionLink.pathname === location.pathname ? 1 : 0}
          >
            My colation
          </LinkNavigation>
          <LinkNavigation
            to={CreateCard}
            isactive={CreateCard.pathname === location.pathname ? 1 : 0}
          >
            Create Hero
          </LinkNavigation>
          <LinkNavigation
            to={About}
            isactive={About.pathname === location.pathname ? 1 : 0}
          >
            About
          </LinkNavigation>
        </NavHeader>
      </WrapperHeaderNav>
      <WrapperBanner />
    </ContainerHeader>
  );
};

export default HeaderNav;
