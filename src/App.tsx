import { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {PrivateRoutes,PublicRoutes} from"./route";
import defaultLayOut from './layout/defaultLayout';

import './App.css'
function App() {

  let usingRoles = [...PublicRoutes, ...PrivateRoutes];
  return (
   
    <BrowserRouter>
   <Fragment>
        <Routes>
            {usingRoles.map((route, index) => {
                let Layout :any = defaultLayOut;
                if (route.layout) {
                    Layout = route.layout;
                } else if (route.layout === null) {
                    Layout = Fragment;
                }
                const Page = route.component;

                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={              
                                                <Layout>
                                                    <Page />
                                                </Layout>                     
                        }
                    />
                );
            })}
        </Routes>
        </Fragment>

</BrowserRouter>
    
  )
}

export default App
