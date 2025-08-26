import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

export const Navbar = () => {
    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Main</Link>
                </li>
                <li>
                    {!user ? <Link to="/login">Login</Link> : <Link to="/createpost">Create Post</Link>}
                </li>
            </ul>
             <div>
            {user ? (
                <>
                    <p>Welcome, {user?.displayName}</p>
                    <img src={user?.photoURL || ""} width="100" height="100" />
                    <button onClick={signUserOut}>Log out</button>
                </>
            ) : (
                <p>Please log in.</p>
            )}
            </div>
        </nav>
       
    );
}
