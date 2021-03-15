import React, { useCallback, useEffect, useState } from "react";
import Pagination from "./Pagination";
import { PaginationWrapper } from "./styledPaginContainer";
const PaginationContainer = ({ TotalPages, ItemsPerPage, TotalItems }) => {
  return (
    <>
      <PaginationWrapper>
        <Pagination
          toShowPagesAtOnce={5}
          TotalPages={TotalPages}
          ItemsPerPage={ItemsPerPage}
          totalCards={TotalItems}
          // itemWasCreated={itemWasCreated}
          // itemWasDeleted={itemWasDeleted}
          pageNeighbours={2}
        />
      </PaginationWrapper>
    </>
  );
};

export default PaginationContainer;
