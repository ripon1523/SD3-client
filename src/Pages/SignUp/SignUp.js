import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const {createUser,updateUser} =useContext(AuthContext);
    const [signUpError,setSignUpError]=useState('')
    const navigate = useNavigate();
    const handleSignUp = data => {
        setSignUpError('');
        createUser(data.email,data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast('User Created Successfully')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{

                navigate('/');
            })
            .catch(err => console.log(err));
        })
        .catch(error => {
            console.log(error)
            setSignUpError(error.message)
        });

    }
    return (
        <div className='h-[800px]  flex justify-center items-center'>

            <div className='w-96 p-7' >
                <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary my-3 text-center'> Sign Up</h2>


                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="text"
                            {...register("name", { required: "Name is required " })} />
                        {errors.name && <p className='text-red-500' >{errors.name?.message}</p>}
                    </div>
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
                                    minLength: { value: 6, message: "Password must be included  6 character or longer" },

                                })} />
                        {errors.password && <p className='text-red-500' >{errors.password?.message}</p>}
                        
                    </div>


                    <input className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full mt-5 ' value="Sign up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>

                

                <p className='text-green-800'>Already have an account ?<Link className='text-primary' to="/login" > Please Login </Link> </p>
                <div className="divider">OR</div>

                <button className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full ' >CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default SignUp;