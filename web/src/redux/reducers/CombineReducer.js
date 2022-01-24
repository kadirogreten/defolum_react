import { combineReducers } from 'redux';
import { HomeReducer, ProductReducer, SideMenuReducer, HeaderReducer, LoginReducer } from './index';


const RootReducer = combineReducers({
    home: HomeReducer,
    product : ProductReducer,
    sideMenu : SideMenuReducer,
    header : HeaderReducer,
    login : LoginReducer
});

export default RootReducer;

