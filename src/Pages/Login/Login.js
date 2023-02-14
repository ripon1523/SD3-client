import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const handleLogin = data => {
        console.log(data)
     
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
                        <input className="input input-bordered w-full max-w-xs" type="text"
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

                <p className='text-green-800'>New to Doctors Portal ?<Link className='text-primary' to="/signup" > Create new account </Link> </p>
                <div className="divider">OR</div>

                <button className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full ' >CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default Login;