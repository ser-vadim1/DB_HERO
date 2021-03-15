import React, { useEffect, useState } from "react";
import { MainContainer } from "../GlobalStyle/StyledMainContainer";
import MarkerIsNoneCards from "../Components/MarkerIsNoneCards/MarkerIsNoneCards";
import { useSelector, useDispatch } from "react-redux";
import { GetCards } from "../Redux/HeroAdjust";
import LayoutCard from "../Components/ComplitedCards/LayoutCard";
import { useGetParametr } from "../Hooks/useGetParametr";
const MainPage = () => {
  const CardHeroArr = useSelector((state) => state.AdjustHeroDb.CardHeroArr);
  const ItemsPerPage = useSelector((state) => state.AdjustHeroDb.ItemsPerPage);
  const totalPages = useSelector((state) => state.AdjustHeroDb.totalPages);
  const totalItems = useSelector((state) => state.AdjustHeroDb.totalItems);
  const [isDoneGetRequest, setIsDoneRequest] = useState(false);
  const Dispatch = useDispatch();
  const pageParams = useGetParametr("page") || 1;

  useEffect(() => {
    let Test = async () => {
      let SkipDoc = Number(pageParams) * ItemsPerPage - ItemsPerPage;
      let resultAction = await Dispatch(GetCards({ skipCards: SkipDoc }));
      if (resultAction.meta.requestStatus === "fulfilled") {
        setIsDoneRequest(true);
      }
    };

    Test();

    return () => {
      setIsDoneRequest(false);
    };
  }, [Dispatch, pageParams, ItemsPerPage]);

  return (
    <MainContainer>
      {CardHeroArr.length && isDoneGetRequest ? (
        <LayoutCard
          arrCard={CardHeroArr}
          TotalPages={totalPages}
          ItemsPerPage={ItemsPerPage}
          TotalItem={totalItems}
        />
      ) : !isDoneGetRequest && !CardHeroArr.length ? (
        ""
      ) : (
        <MarkerIsNoneCards />
      )}
    </MainContainer>
  );
};

export default MainPage;
