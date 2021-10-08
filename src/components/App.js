import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginAction, { logoutAction, setDataAction } from '../actions/actions';

function App() {
    const [phone, setPhone] = useState();
    const dispatch = useDispatch();
    const newState = useSelector((state) => state.auth);
    console.log(newState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((json) => dispatch(setDataAction(json)))
            .catch((err) => console.log(err));
    }, [dispatch]);

    return (
        <div>
            {newState.isAuth ? (
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
            )}
        </div>
    );
}

export default App;
