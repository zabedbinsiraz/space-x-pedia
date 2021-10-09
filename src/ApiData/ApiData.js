import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import setDataAction, { setFilterAction, setMissionAction } from '../actions/actions';

// eslint-disable-next-line react-hooks/rules-of-hooks
const dispatch = useDispatch();
// eslint-disable-next-line react-hooks/rules-of-hooks
const newState = useSelector((state) => state);

console.log(newState);

const apiUrl = 'https://api.spacexdata.com/v3/launches';

const fetchData = () =>
    axios
        .get(apiUrl)
        .then((response) => response.data)
        .then((data) => {
            dispatch(setDataAction(data));
        })
        .catch((error) => {
            throw error;
        });

export const fetchOneMission = (id) =>
    axios
        .get(`${apiUrl}/${id}`)
        .then((response) => response.data)
        .then((data) => {
            dispatch(setFilterAction(data));
        })
        .catch((error) => {
            throw error;
        });

export const filterSuccess = (success) => dispatch(setMissionAction(success));

export default fetchData;
