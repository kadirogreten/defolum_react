import React, { Component, Suspense } from 'react';
import { Container } from 'reactstrap';
import {Route,Switch} from 'react-router-dom';
import routes from '../routes/routes';

const SideMenu = React.lazy(() => import('./SideMenu'));
const Footer = React.lazy(() => import('./Footer'));
const Header = React.lazy(() => import('./Header'));


class DefaultLayout extends Component {

    loading = () => <div>Yükleniyor...</div>

    render(){
        return(
            <main className="main">
              <Suspense fallback={this.loading()}>
                <Header />
                  <SideMenu />        
                    <Container className="main-container" fluid>
                      <Suspense fallback={this.loading()}>
                        <Switch>
                          {routes.map((route, idx) => {
                            return route.component ? (
                              <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                  <route.component {...props} />
                                )} />
                            ) : (null);
                          })}
                        </Switch>
                      </Suspense>
                    </Container>       
                  <Footer />
                </Suspense>
          </main>
        )
    }
}


export default DefaultLayout;