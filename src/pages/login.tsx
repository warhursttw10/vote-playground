import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            
            navigate('/');

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            <p>Please log in using your Google account.</p>
            <button onClick={handleLogin}>Login with Google</button>
        </div>
    );
}
