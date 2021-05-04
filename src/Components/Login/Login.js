import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { handleGoogleIn, initializeLoginFramework } from '../firebaseConfig/FireAurth';

const Login = () => {
    initializeLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleIn().then((res) => {
            setLoggedInUser(res);
            history.replace(from);
        })
    }
    return (
        <div className="mt-5 p-5">
            <button onClick={googleSignIn}>Sign In</button>
        </div>
    );
};

export default Login;