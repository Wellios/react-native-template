import { ACTION_TYPES } from '../constants'

const initialState = {
    userProfile: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.AUTH.LOGIN:
            return {
                userProfile: initialState
            };
        default:
            return state
    }
}