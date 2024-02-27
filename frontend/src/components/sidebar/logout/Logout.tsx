import React from "react";
import { SlLogout } from "react-icons/sl";
import useLogout from "../../../hooks/useLogout";

const Logout: React.FC = () => {
  let { loading, logOut } = useLogout();

  function handleLogout(): void {
    logOut();
  }

  return (
    <>
      <div className='divider p-0 m-0 h-1'></div>
      {loading ? (
        <div className='loading-spinner'></div>
      ) : (
        <div className='mt-auto'>
          <SlLogout
            onClick={handleLogout}
            className='w-6 h-6 text-white cursor-pointer'
          />
        </div>
      )}
    </>
  );
};

export default Logout;
