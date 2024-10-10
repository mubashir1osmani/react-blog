import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const LogIn = async () => {
        try {
            await signInWithEmailAndPassword(getAuth, email, password);
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
            <h1>Login</h1>
            {error && <p className="error">{error}</p>}
            <input 
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input type="password"
                    placeholder="Enter your password!!!!!!"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
            />

            <button onClick={LogIn}>Log In</button>
            <Link to="/create-account">Don't have an account? Sign up!</Link>
            
        </>

    )


}

export default LoginPage;