import React from 'react'

function Register() {
    const registerAPI = 'http://sefdb02.qut.edu.au:3001/user/register';
    const [register, setRegister] = React.useState({
        email: '',
        password: ''
    });
    const [error, setError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleChange = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetch(registerAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(register)
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

    return (
        <div className='register__section'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' className='form-control' id='email' name='email' value={register.email} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' className='form-control' id='password' name='password' value={register.password} onChange={handleChange} />
                </div>
                <button type='submit' className='btn btn-primary'>Register</button>
            </form>
            {error && <p className='text-danger'>{error}</p>}
        </div>
    )
}

export default Register;