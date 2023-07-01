import HomePage from '../Pages/homePage';
// import Following from '@/Pages/Following';
// import Upload from '@/Pages/Upload';

// import HeaderOnly from '@/Layout/HeaderOnly';
import routes from '../config';

const PublicRoutes = [
   
    { path: routes.home, component: HomePage },
    // { path: routes.following, component: Following },

    // { path: routes.upload, component: Upload, layout: HeaderOnly },
];
const PrivateRoutes = [];

export { PrivateRoutes, PublicRoutes };