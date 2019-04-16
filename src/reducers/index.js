import { combineReducers } from 'redux';
import {ACTION_TYPES} from '../constants';
import  authReducers  from './authReducers'


const AppReducer = combineReducers({
    auth: authReducers
});


const rootReducer = (state, action) => {

    if (action.type === ACTION_TYPES.AUTH.LOGOUT) {
        state = undefined
    }

    return AppReducer(state, action)
};

export default AppReducer;