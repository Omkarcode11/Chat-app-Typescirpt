import React from "react";

interface GenderCh {
  handleSelectGender: (gender: "male" | "female") => void;
  val: "" | "male" | "female";
}

const GenderCheckBox: React.FC<GenderCh> = ({ handleSelectGender ,val}) => {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label className='label gap-2 cursor-pointer'>
          <span className='label-text'>Male</span>
          <input
            type='checkbox'
            className='checkbox checkbox-info border-slate-900'
             checked={val=='male'}
            value={"male"}
            onChange={()=>handleSelectGender("male")}
          />
        </label>
      </div>
      <div className='form-control'>
        <label className='label gap-2 cursor-pointer'>
          <span className='label-text'>Female</span>
          <input
            type='checkbox'
            className='checkbox checkbox-secondary border-slate-900'
            checked={val=='female'}
            onChange={()=>handleSelectGender("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
