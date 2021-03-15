import MainPage from "../pages/MainPage"
import AboutPage from "../pages/AboutPage"
import CreateHeroPage from "../pages/CreateHeroPage"
import UpdatetCardPage from "../pages/updateCardPage"
export const ArrRoutes = [
   {path: "/", Component: MainPage},
   {path: "/about", Component: AboutPage},
   {path: "/createHero", Component: CreateHeroPage},
   {path: "/updateCard", Component: UpdatetCardPage}
]