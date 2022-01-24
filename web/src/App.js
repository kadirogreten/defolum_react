import React from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers/CombineReducer';
import { Switch, Route , BrowserRouter } from 'react-router-dom';
import './App.css';

const middleware = [thunk]; 
const store = createStore(reducers,compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));


const Page404 = React.lazy(() => import('./views/Page404'));
const Page500 = React.lazy(() => import('./views/Page500'));

const loading = () => <div>Yükleniyor...</div>;

function App() {
  return (
    <Provider store={store}>
       <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/404" name="404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Anasayfa" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
