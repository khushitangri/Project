import React from "react";
const Suggestion = ({ Image, Name, Recomnede, Follow }) => {
  return (
    <div className="flex justify-between ml-40 mt-4 items-center">
      <div className="flex gap-4">
        <div>
          <img
            className="w-[36px] h-[36px] rounded-[50%] object-cover"
            src={Image}
            alt=""
          />
        </div>
        <div>
          <div className="text-[14px] font-bold">{Name} </div>
          <div className="font-thin text-[14px] text-slate-300 font-bold">
            {Recomnede}
          </div>
        </div>
      </div>
      <div className="ml-4 text-[14px] text-blue-600 ">{Follow}</div>
    </div>
  );
};

export default Suggestion;
