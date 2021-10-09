// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import loginAction, { logoutAction, setDataAction } from '../actions/actions';
// import setDataAction from '../actions/actions';

function App() {
    // const [phone, setPhone] = useState();
    // const dispatch = useDispatch();
    const newState = useSelector((state) => state);
    console.log(newState);

    // useEffect(() => {
    //     fetch('https://api.spacexdata.com/v3/launches')
    //         .then((response) => response.json())
    //         .then((json) => dispatch(setDataAction(json)))
    //         .catch((err) => console.log(err));
    // }, [dispatch]);

    // const apiUrl = 'https://api.spacexdata.com/v3/launches';

    // export const fetchData = () => dispatch => axios.get(apiUrl)
    //   .then(response => response.data)
    //   .then(data => {
    //     dispatch({
    //       type: ADD_FETCHED_DATA,
    //       payload: data,
    //     });
    //   })
    //   .catch(error => {
    //     throw (error);
    //   });

    return (
        <div>
            {/* {newState.isAuth ? (
                <div>
                    <p>welcome</p>
                    <button type="submit" onClick={() => dispatch(logoutAction())}>
                        logout
                    </button>
                </div>
            ) : (
                <div>
                    <h1>Hello world</h1>
                    <input
                        type="text"
                        name="phone"
                        value={phone}
                        placeholder="phone"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button type="submit" onClick={() => dispatch(loginAction(phone))}>
                        Log in
                    </button>
                </div>
            )} */}
            Hello world
        </div>
    );
}

export default App;
