import React from "react";
import {
  ContainerCards,
  WrapperOfCard,
  WrapperImage,
  InfoBox,
  ImgHero,
} from "./styledCards";
import { Link } from "react-router-dom";
import { usePrepareLink } from "../../Hooks/usePrepareLink";
import { DOMAIN_NAME } from "../../Helper/api";

const Card = ({ nickName, image, _id }) => {
  const updatesCard = usePrepareLink({
    to: "/updateCard",
    query: {
      idCard: _id,
    },
  });

  return (
    <>
      <WrapperOfCard>
        <Link to={updatesCard}>
          <WrapperImage>
            <ImgHero
              src={
                image
                  ? `${DOMAIN_NAME}/${image}`
                  : "https://image.flaticon.com/icons/png/512/37/37543.png"
              }
            />

            <InfoBox>
              <p>{nickName}</p>
            </InfoBox>
          </WrapperImage>
        </Link>
      </WrapperOfCard>
    </>
  );
};

export default Card;
