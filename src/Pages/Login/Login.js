import React from 'react';
import useAuth from '../../Hook/useAuth';
import img from '../../img/google.jpg'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    
    return (
        <div>
            <h1 className="text-center my-5 py-5 text-success fw-bolder"> Please Sign In</h1>


            <img src={img} alt="" className="img-fluid rounded shadow w-25" /> <br />
            <button onClick={signInUsingGoogle} className="btn btn-success my-5">Google Sign In</button>
        </div>
    );
};

export default Login;