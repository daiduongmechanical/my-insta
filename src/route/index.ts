import HomePage from "../Pages/homePage";
import ProfilePage from "../Pages/profilePage";
import DiscoverPage from "../Pages/discover/discover";
import routes from "../config";
import NoFooterLayout from "../layout/noFooterLayout";
import LoginPage from "../Pages/login";
const PublicRoutes = [
  { path: routes.home, component: HomePage },
  { path: routes.profile, component: ProfilePage,layout:NoFooterLayout  },
  { path: routes.Discover, component: DiscoverPage,layout:NoFooterLayout  },
  { path: routes.login, component: LoginPage,layout:null  },
];
const PrivateRoutes:any[] = [];

export { PrivateRoutes, PublicRoutes };
