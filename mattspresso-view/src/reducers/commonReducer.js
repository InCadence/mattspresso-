import { COMMON_ACTIONS } from '../actions';

const initialState = {
}

export default function (state = initialState, action) {

    const newState = { ...state };

    switch (action.type) {
        case COMMON_ACTIONS.ERROR:
            newState.error = action.payload;
            break;
        default: 
            break;
    }

    return newState;

}