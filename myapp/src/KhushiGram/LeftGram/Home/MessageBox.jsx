import React, { useState } from "react";
import Navigation from ".";
import { Cross, Editing, MessengerIcon, Updown } from "../../../Icons";
import InstaLogo from "../../../Images/logoii.png";
import ChatsBox from "./ChatsBox";
const MessageBox = () => {
  const [updown, setUpdown] = useState(false);
  const [edit, setEdit] = useState(false);
  const MessageDown = () => {
    setUpdown(true);
    setUpdown(!updown);
  };
  const FalseUpdown = () => {
    setUpdown(false);
  };
  const EditTrue = () => {
    setEdit(true);
    setEdit(!edit);
  };
  const FalseEdit = () => {
    setEdit(false);
  };
  return (
    <div className="text-white flex bg-black w-[100%]">
      <div className="fixed h-[100%]">
        <Navigation />
      </div>
      <div className="border-r ml-[256px] pt-10 bg-black">
        <div className="flex items-center ">
          <div className="flex items-center gap-2">
            <div className="ml-6 font-medium text-[28px] bg-black">
              k_tangri
            </div>
            <button onClick={MessageDown}>
              <Updown />
            </button>
          </div>
          <button className="ml-40" onClick={EditTrue}>
            <Editing />
          </button>
        </div>
        <div className="px-4 w-[400px] overflow-auto h-[1200px] bg-black">
          <div className="text-[18px] font-medium mt-4">Messages</div>
          <div>
            <ChatsBox />
            <div>
              trvytbhgtv
            </div>
          </div>
        </div>
      </div>
      {updown && (
        <div className="bg-[#3A3B3C] mt-[160px] rounded-[10px] ml-8 w-[400px] h-[400px] relative z-20">
          <button
            className="ml-[359px] text-[20px] font-medium"
            onClick={FalseUpdown}
          >
            <Cross />
          </button>
          <div>
            <img className="h-20 ml-24 mt-6" src={InstaLogo} alt="" />
          </div>
          <input
            className="w-[280px] ml-12 h-8 outline-none mt-6 bg-[#1c1e21]  text-white text-[12px] pl-2"
            type="text"
            placeholder="Phone number, username, or email"
          />
          <input
            className="w-[280px] ml-12 h-8 outline-none mt-4 bg-[#1c1e21]  text-white text-[12px] pl-2"
            type="text"
            placeholder="Password"
          />{" "}
          <br /> <br />
          <div className="flex items-center gap-2">
            <input className="ml-12" type="checkbox" name="" id="" />{" "}
            <span className="text-[13px] "> Save login info</span>
          </div>
          <button className="bg-blue-400 w-[270px] flex justify-center items-center h-8 rounded-[10px] text-[14px] font-bold mt-2 ml-[60px]">
            Log in
          </button>
          <div className="ml-40 text-[13px] mt-6">Forget password?</div>
        </div>
      )}
      {edit && (
        <div className="bg-[#3A3B3C] mt-[160px] rounded-[10px] ml-4 w-[500px] h-[400px] relative z-20">
          <div className="flex ml-40 pt-2">
            <div className="font-bold text-[18px]">New Messages</div>
            <button
              className="ml-[160px] text-[20px] font-medium"
              onClick={FalseEdit}
            >
              <Cross />
            </button>
          </div>
          <div className="pl-6 font-medium text-[18px] border-t border-b">
            <div className="py-2">
              To :{" "}
              <input
                className="bg-[#3A3B3C] outline-none pl-2 text-[14px]"
                type="text"
                placeholder="Search...."
              />
            </div>
          </div>
        </div>
      )}
      <div className="fixed ml-[900px] mt-[255px]  z-10">
        <div className="h-[100px] p-6 border-2 w-[104px] ml-[60px] rounded-[50%]">
          <MessengerIcon />
        </div>
        <div className="text-[22px] ml-[60px]">Your Messages</div>
        <div className="ml-[-10px]">
          Send private photos and messages to a friend or group
        </div>
        <button className="bg-blue-400 w-[170px] flex justify-center items-center h-10 rounded-[10px] text-[14px] font-medium mt-2 ml-[60px]">
          Send Messages
        </button>
      </div>
    </div>
  );
};
export default MessageBox;
