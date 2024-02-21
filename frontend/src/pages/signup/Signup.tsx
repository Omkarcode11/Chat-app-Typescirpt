import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import { User } from "../../utils/Interfaces";
import useSignUp from "../../hooks/useSignUp";


const Signup: React.FC = () => {

  const [user,setUser] = useState<User>({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    gender:""
  })
  const {loading,signUp} = useSignUp()
   
  async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    await signUp(user)
  }

  function handleSelectGender(str:"male"|"female"){
       setUser({...user,gender:str})
       return;
  }

   
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          SignUp
          <span className='text-blue-700'>Chatapp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className='flex flex-wrap'>
            <div className='mr-4'>
              <label className='label p-2'>
                <span className='text-base label-text'>FirstName</span>
              </label>
              <input
                type='text'
                className=' w-full input input-bordered h-10'
                placeholder='Enter FirstName'
                value={user.firstName}
                onChange={(e)=>setUser({...user,firstName:e.target.value})}
              />
            </div>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>LastName</span>
              </label>
              <input
                type='text'
                className=' w-full input input-bordered h-10'
                placeholder='Enter LastName'
                value={user.lastName}
                onChange={(e)=>setUser({...user,lastName:e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Email</span>
            </label>
            <input
              type='text'
              className=' w-full input input-bordered h-10'
              placeholder='Enter Email'
              value={user.email}
              onChange={(e)=>setUser({...user, email: e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
              
            </label>
            <input
              type='password'
              className=' w-full input input-bordered h-10'
              placeholder='Enter Password'
              value={user.password}
              onChange={(e)=>setUser({...user,password:e.target.value})}
            />
          </div>
          <GenderCheckBox handleSelectGender={handleSelectGender} val={user.gender} />

          <Link
            to='/login'
            className='text-sm hover:underline hover:text-blue-900 mt-2 inline-block'>
            Already have account?
          </Link>

          <div>
            <button  type="submit" className='btn btn-block btn-sm mt-2'>
              {loading?
               <span className="loading loading-spinner"></span>:
                "SignUp"
              }
              
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
