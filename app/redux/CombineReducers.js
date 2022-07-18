import { combineReducers } from "redux";
import ChangeIsLoading from "./ChangeIsLoading";
import ChangeChoosedPhoto from "./ChangeChoosedPhoto";

export default combineReducers({
    isLoading: ChangeIsLoading,
    choosedPhoto: ChangeChoosedPhoto
});