import HomePage from "../Pages/homePage";
import ProfilePage from "../Pages/profilePage";
import DiscoverPage from "../Pages/discover/discover";
import BellPage from "../Pages/bell/bell";
import routes from "../config";
import NoFooterLayout from "../layout/noFooterLayout";
import EllipsisPage from "../component/ellipsis";
import shareVideoPage from "../component/shareVideo";
const PublicRoutes = [
  { path: routes.home, component: HomePage },
  { path: routes.profile, component: ProfilePage,layout:NoFooterLayout  },
  { path: routes.Discover, component: DiscoverPage,layout:NoFooterLayout  },
  { path: routes.Ellip, component: EllipsisPage,layout:null  },
  { path: routes.shareVideo, component: shareVideoPage,layout:null  },
];
const PrivateRoutes:any[] = [];

export { PrivateRoutes, PublicRoutes };
