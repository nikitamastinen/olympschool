import { createStore} from "redux";

const defaultState = {
    page: 'main',
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "page":
            return {...state, page: action.payload};
        default:
            return state;
    }
};

export const NavigationStateStore = createStore(reducer);