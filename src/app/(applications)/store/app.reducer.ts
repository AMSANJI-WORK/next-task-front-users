import UserSlice from "@/app/users/(core)/store/user.slice";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  [UserSlice.name]: UserSlice.reducer,
});

export default appReducer;
