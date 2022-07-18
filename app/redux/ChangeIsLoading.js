import { actions } from "../consts/ActionsConsts";

const ChangeIsLoading = (state={isLoading: true}, action) => {
    switch(action.type) {
        case actions.SET_IS_LOADING:
            return {isLoading: action.payload}
        default:
            return state;
    }
}

export default ChangeIsLoading;