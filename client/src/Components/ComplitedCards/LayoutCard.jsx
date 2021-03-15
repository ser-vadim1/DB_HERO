import React from "react";
import Card from "./Card";
import { ContainerCards } from "./srtyledLayout";
import PaginationContainer from "../pagination/PaginationContainer";
const LayoutCard = ({ arrCard, TotalPages, ItemsPerPage, TotalItems }) => {
  return (
    <>
      <ContainerCards>
        {arrCard.map((cardHero) => {
          return (
            <Card
              key={cardHero._id}
              nickName={cardHero.nickName}
              image={cardHero.image}
              _id={cardHero._id}
            />
          );
        })}
      </ContainerCards>
      <PaginationContainer
        TotalPages={TotalPages}
        ItemsPerPage={ItemsPerPage}
        TotalItems={TotalItems}
      />
    </>
  );
};

export default LayoutCard;
