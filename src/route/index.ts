import HomePage from "../Pages/homePage";
import ProfilePage from "../Pages/profilePage";
import DiscoverPage from "../Pages/discover/discover";
import routes from "../config";

const PublicRoutes = [
  { path: routes.home, component: HomePage },
  { path: routes.profile, component: ProfilePage },
  { path: routes.Discover, component: DiscoverPage  },
  // { path: routes.upload, component: Upload, layout: HeaderOnly },
];
const PrivateRoutes:any[] = [];

export { PrivateRoutes, PublicRoutes };
