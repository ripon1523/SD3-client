import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } 
    = useForm();
    const {signIn} = useContext(AuthContext);
    const [loginError,setLoginError] = useState('');
    const location = useLocation();
    const navigate =useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email,data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from,{replace:true})
        })
        .catch(error => {
            console.log(error.message)
            setLoginError(error.message);
        });
     
    }
    return (
        <div className='h-[800px]  flex justify-center items-center'>

            <div className='w-96 p-7' >
                <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary my-3 text-center'> Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="email"
                            {...register("email", { required: "Email is required " })} />
                        {errors.email && <p className='text-red-500' >{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="password"
                            {...register("password",
                             { 
                                required: "Password is required",
                                minLength:{value:6, message:"Password must be included  6 character or longer"},
                                
                                })} />
                        {errors.password && <p className='text-red-500' >{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password ?</span>
                        </label>
                    </div>





                    <input className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full ' value="Login" type="submit" />
                </form>

                <div>
                    { loginError && <p>{loginError}</p> }
                </div>

                <p className='text-green-800'>New to Doctors Portal ?<Link className='text-primary' to="/signup" > Create new account </Link> </p>
                <div className="divider"> OR </div>

                <button className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full ' >CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default Login;
