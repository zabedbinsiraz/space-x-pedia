import { createSlice } from '@reduxjs/toolkit';

const fetchedSlice = createSlice({
    name: 'fetched',
    initialState: {
        mission_name: 'USCV-1 (NASA Crew Flight 1)',
        links: {
            mission_patch_small:
                'https://spacexpatches.weebly.com/uploads/8/8/4/0/88400246/uscv1-nasa-spacex_orig.png',
        },
    },
    reducers: {
        // eslint-disable-next-line no-undef
        setFetchedData: (state, action) =>
            // eslint-disable-next-line no-param-reassign
            [...action.payload],
    },
});
export default fetchedSlice;

export const filterSlice = createSlice({
    name: 'filter',
    initialState: 'All',
    reducers: {
        // eslint-disable-next-line no-undef
        // eslint-disable-next-line no-unused-vars
        setFilteredData: (state, action) =>
            // eslint-disable-next-line no-param-reassign
            state,
    },
});
export const missionSlice = createSlice({
    name: 'mission',
    initialState: {},
    reducers: {
        // eslint-disable-next-line no-undef
        // eslint-disable-next-line no-unused-vars
        setFilteredData: (state, action) =>
            // eslint-disable-next-line no-param-reassign
            action.payload,
    },
});

// export const authSlice = createSlice({
//     name: 'auth',
//     initialState: {
//         isAuth: false,
//         phone: '',
//         data: '',
//     },
//     reducers: {
//         setLogin: (state, action) => {
//             // eslint-disable-next-line no-param-reassign
//             state.isAuth = true;
//             // eslint-disable-next-line no-param-reassign
//             state.phone = action.payload;
//         },
//         // eslint-disable-next-line no-unused-vars
//         setLogout: (state, action) => {
//             // eslint-disable-next-line no-param-reassign
//             state.isAuth = false;
//             // eslint-disable-next-line no-param-reassign
//             state.phone = '';
//             // eslint-disable-next-line no-param-reassign
//             state.data = '';
//         },
//         setData: (state, action) => {
//             // eslint-disable-next-line no-param-reassign
//             state.data = action.payload;
//         },
//     },
// });
// export default authSlice;
