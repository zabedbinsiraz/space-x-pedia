import { combineReducers } from '@reduxjs/toolkit';
// import { authSlice } from '../redux/slice';
import fetchedSlice, { filterSlice, missionSlice } from '../redux/slice';

export const rootReducer = combineReducers({
    // auth: authSlice.reducer,
    fetched: fetchedSlice.reducer,
    filter: filterSlice.reducer,
    mission: missionSlice.reducer,
});
export default rootReducer;
