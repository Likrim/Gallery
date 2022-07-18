import { actions } from "../consts/ActionsConsts";

const ChangeChoosedPhoto = (state={choosedImages: new Array()}, action) => {
    switch(action.type) {
        case actions.SET_CHOOSED_IMAGES:
            return {choosedImages: action.payload};
        default:
            return state;
    }
}

export default ChangeChoosedPhoto;