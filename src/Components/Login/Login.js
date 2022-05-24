import React from 'react'
import './Login.css';
function Login() {
    const [login, setLogin] = React.useState({
        email: '',
        password: ''
    });
    const [error, setError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetch(`http://sefdb02.qut.edu.au:3001/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.error);
                    setIsLoading(false);
                } else {
                    localStorage.setItem('token', data.token);
                    window.location.href = '/';
                }
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            }
            );
    }

    // get the token from local storage
    const token = localStorage.getItem('token');
    if (token != null) {
        return (
            <h1>You are already logged in</h1>
        )
    } else {
        return (
            <div className='login__section'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' className='form-control' id='email' name='email' value={login.email} onChange={handleChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' className='form-control' id='password' name='password' value={login.password} onChange={handleChange} />
                    </div>
                    <button type='submit' className='btn btn-primary'>Login</button>
                </form>
                {error && <p className='text-danger'>{error}</p>}
                {isLoading && <p className='text-info'>Loading...</p>}
            </div>
        )
    }
}

export default Login