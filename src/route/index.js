import HomePage from '../Pages/homePage';
import ProfilePage from '../Pages/profilePage';
import routes from '../config';

const PublicRoutes = [
   
    { path: routes.home, component: HomePage },
    { path: routes.profile, component: ProfilePage },

    // { path: routes.upload, component: Upload, layout: HeaderOnly },
];
const PrivateRoutes = [];

export { PrivateRoutes, PublicRoutes };