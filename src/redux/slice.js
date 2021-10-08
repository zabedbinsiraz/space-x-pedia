import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        phone: '',
        data: '',
    },
    reducers: {
        setLogin: (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.isAuth = true;
            // eslint-disable-next-line no-param-reassign
            state.phone = action.payload;
        },
        // eslint-disable-next-line no-unused-vars
        setLogout: (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.isAuth = false;
            // eslint-disable-next-line no-param-reassign
            state.phone = '';
            // eslint-disable-next-line no-param-reassign
            state.data = '';
        },
        setData: (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.data = action.payload;
        },
    },
});
export default authSlice;
