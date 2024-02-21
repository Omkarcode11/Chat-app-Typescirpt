import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

interface LoginInput {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  let [user, setUser] = useState<LoginInput>({
    email: "",
    password: "",
  });
  
  const { loading, login } = useLogin();
  function handleLogin(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    login(user);
    setUser({ email: "", password: "" });
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login
          <span className='text-blue-700'>Chatapp</span>
        </h1>

        <form onSubmit={handleLogin}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Email</span>
            </label>
            <input
              type='text'
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className=' w-full input input-bordered h-10'
              placeholder='Enter Email'
              value={user.email}
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              className=' w-full input input-bordered h-10'
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder='Enter Password'
              value={user.password}
            />
          </div>

          <Link
            to='/signup'
            className='text-sm hover:underline hover:text-blue-900 mt-2 inline-block'>
            {"Don't"} have account?
          </Link>

          <div>
            <button type='submit' className='btn btn-block btn-sm  mt-2'>
              {loading ? (
                <span className='loading loading-dots'></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
