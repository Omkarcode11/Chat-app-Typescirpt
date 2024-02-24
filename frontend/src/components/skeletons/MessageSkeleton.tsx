import React from "react";

function MessageSkeleton() {
  return (
    <div className='flex gap-3 items-center mb-10'>
      <div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
      <div className='flex flex-col gap-1'>
        <div className='skeleton w-40 h-4'></div>
        <div className='skeleton w-40 h-4'></div>
      </div>
      <div className='flex gap-3 justify-center items-center'>
        <div className='flex flex-col gap-1'>
          <div className='skeleton w-40 h-4'></div>
        </div>
        <div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
      </div>
    </div>
  );
}

export default MessageSkeleton;
