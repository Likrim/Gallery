import { actions } from "../consts/ActionsConsts"

export const setIsLoading = (value) => ({
    type: actions.SET_IS_LOADING,
    payload: value
})