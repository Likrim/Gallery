import { actions } from "../consts/ActionsConsts";

export const setChoosedImages = (value) => ({
    type: actions.SET_CHOOSED_IMAGES,
    payload: value
})