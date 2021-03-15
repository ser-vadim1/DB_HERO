import { configureStore } from '@reduxjs/toolkit';
import AdjustHeroDReducer from "../Redux/HeroAdjust"

export default configureStore({
  reducer: {
    AdjustHeroDb: AdjustHeroDReducer
  },
});
