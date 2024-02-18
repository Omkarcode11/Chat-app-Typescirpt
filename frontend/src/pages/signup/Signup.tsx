import GenderCheckBox from "./GenderCheckBox";

const Signup: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          SignUp
          <span className='text-blue-700'>Chatapp</span>
        </h1>

        <form>
          <div className='flex flex-wrap'>
            <div className='mr-4'>
              <label className='label p-2'>
                <span className='text-base label-text'>FirstName</span>
              </label>
              <input
                type='text'
                className=' w-full input input-bordered h-10'
                placeholder='Enter FirstName'
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
            />
          </div>
          <GenderCheckBox />

          <a
            href='#'
            className='text-sm hover:underline hover:text-blue-900 mt-2 inline-block'>
            Already have account?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2'>Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
