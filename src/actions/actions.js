// import { authSlice } from '../redux/slice';
import fetchedSlice, { filterSlice, missionSlice } from '../redux/slice';

const { actions: slice } = fetchedSlice;
const { actions: filter } = filterSlice;
const { actions: mission } = missionSlice;

// const loginAction = (phone) => (dispatch) => {
//     dispatch(slice.setLogin(phone));
// };
// export const logoutAction = () => (dispatch) => {
//     dispatch(slice.setLogout());
// };

// export const setDataAction = (data) => (dispatch) => {
//     dispatch(slice.setData(data));
// };
// export default loginAction;
// console.log(authSlice);

const setDataAction = (data) => (dispatch) => {
    dispatch(slice.setFetchedData(data));
};
export const setFilterAction = (data) => (dispatch) => {
    dispatch(filter.setFilteredData(data));
};
export const setMissionAction = (data) => (dispatch) => {
    dispatch(mission.setMissionData(data));
};
export default setDataAction;
console.log(fetchedSlice);
