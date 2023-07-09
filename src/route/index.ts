import HomePage from "../Pages/homePage";
import ProfilePage from "../Pages/profilePage";
import DiscoverPage from "../Pages/discover/discover";
import routes from "../config";
import NoFooterLayout from "../layout/noFooterLayout";

const PublicRoutes = [
  { path: routes.home, component: HomePage },
  { path: routes.profile, component: ProfilePage,layout:NoFooterLayout  },
  { path: routes.Discover, component: DiscoverPage,layout:NoFooterLayout  },

];
const PrivateRoutes:any[] = [];

export { PrivateRoutes, PublicRoutes };
