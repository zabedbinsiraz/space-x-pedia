import { authSlice } from '../redux/slice';

const { actions: slice } = authSlice;

const loginAction = (phone) => (dispatch) => {
    dispatch(slice.setLogin(phone));
};
export const logoutAction = () => (dispatch) => {
    dispatch(slice.setLogout());
};

export const setDataAction = (data) => (dispatch) => {
    dispatch(slice.setData(data));
};
export default loginAction;
console.log(authSlice);
