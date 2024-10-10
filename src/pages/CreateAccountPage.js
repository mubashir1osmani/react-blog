/* eslint-disable react-hooks/rules-of-hooks */
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateAccountPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    const createAccount = async () => {
        try {
            if(password !== confirmPassword) {
                setError("The passwords do not match!");
                return;
            }
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
        <h1>Create Account</h1>
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
            <input type="password"
                    placeholder="Enter your password!!!!!!"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
            />
            <button onClick={createAccount}>Create Account</button>
            <Link to="/login">Already have an account? Login here!</Link>
        </>
    )

}

export default CreateAccountPage;