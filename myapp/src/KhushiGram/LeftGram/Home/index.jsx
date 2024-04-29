import React, { useContext, useState } from "react";
import { Apis } from "../../../KhushiGram";
import {
  AlbumsIcons,
  Create,
  Cross,
  Explore,
  HomeIcon,
  InstaGramIcons,
  Messages,
  MoreOptions,
} from "../../../Icons";
import InstGramLogo from "../../../Images/logo.png";
import SearchBar from "./Search";
import { Link } from "react-router-dom";
import Dp from "../../../Images/dp.jpg";
const Navigation = () => {
 const api = useContext(Apis)
 console.log('[lf',api)
  const [search, setSearch] = useState(false);
  const [togling, setTogling] = useState(false);
  const [inputBrowser,setInputBrowser]=useState(false)
  const CreateInsta = () => {
    setTogling(true);
    setTogling(!togling)

  };
  const ToggleFalse=()=>{

    setTogling(false)
  }
  const InputFile = ()=>{
    setInputBrowser(true)
  }
  return (
    <div className="pt-10 w-[250px] border-r h-[100%] bg-black text-white">
      <div className="leading-[50px] ml-6  mt-4">
        {search ? (
          <div className="mt-[-20px]  fixed">
            <InstaGramIcons />
          </div>
        ) : (
          <div className="w-[100px]  ml-2 fixed mt-[-30px]">
            <img src={InstGramLogo} alt="" />
          </div>
        )}
          {search ? (
            <div className="flex gap-2 items-center fixed mt-[46px] ">
              <Link to={"/"}>
                <div>
                  <HomeIcon />{" "}
                </div>
              </Link>
            </div>
          ) : (
            <div>
              <Link to={"/"}>
                <div className="flex gap-2 items-center mt-[34px] fixed">
                  <HomeIcon />
                  <span className="text-[20px]">Home</span>
                </div>
              </Link>
            </div>
          )}
          <br />
          <SearchBar search={search} setSearch={setSearch} />
          <br />
          {search ? (
            <Link to={"/explore"}>
              <div className="flex gap-2 items-center fixed mt-[46px] ">
                <Explore />
              </div>
            </Link>
          ) : (
            <Link to={"/explore"}>
              <div className="flex gap-2 items-center fixed mt-[34px] ">
                <Explore /> <span className="text-[20px]">Explore</span>
              </div>
            </Link>
          )}
          <br />
          {search ? (
            <Link to={"/messages"}>
              <div className="flex gap-2 items-center fixed mt-[46px] ">
                <Messages />{" "}
              </div>
            </Link>
          ) : (
            <Link to={"/messages"}>
              <div className="flex gap-2 items-center fixed mt-[34px]">
                <Messages /> <span className="text-[20px] ">Messages</span>
              </div>
            </Link>
          )}

          <br />
       
          <div>
            {search ? (
              <div className="flex gap-2 items-center fixed mt-[42px] ">
                <div>
                  <Create />
                </div>
              </div>
            ) : (
              <div
                className="flex gap-2 items-center fixed mt-[30px]"
                onClick={CreateInsta}
              >
  <div className="flex gap-2 items-center fixed mt-[40px]">
                      <Create /> <span className="text-[20px] ">Create</span>
                    </div>
                </div>
 )}
          </div>
{
  togling && (
    <div>
         <div className="ml-[420px] mt-[-100px] bg-[#7a7d82] text-center h-[500px] rounded-[10px] fixed ">
                   <h2 className="py-1 w-[470px] border-b ">Create new post</h2>
                    <div className="ml-[200px] mt-[120px]">
                      <AlbumsIcons/>
                    </div>
                  <div className="text-[21px]">
                   Drag photos and videos here
                   </div>
                    <button className="bg-blue-400 px-2 rounded-[10px]" onClick={InputFile}>
                     {
                        inputBrowser ? (
                          <>
                          <label htmlFor="upload_img">
                            <div className="font-medium"> 
                              Upload will here
                            </div>
                          </label>
                          <input id='upload_img' className="w-[90px] hidden" type="file" />
                          </>
                        ): <div>  Select from Computer </div>
                      }
                    
                    </button>
                 
                  </div>
                  </div>
                
  )
}
{togling && 
<div className="ml-[1000px] mt-[-160px] font-bold fixed" onClick={ToggleFalse}>
                    <Cross/>
                  </div>}


        {search ? (
          <Link to={"/profile"}>
            <div className="flex gap-2 items-center fixed mt-[90px] ">
              <img
                className="w-[36px] h-[36px] rounded-[50%] object-cover"
                src={Dp}
                alt=""
              />
            </div>
          </Link>
        ) : (
          <Link to={"/profile"}>
            <div className="flex gap-2 items-center fixed mt-[80px]">
              <img
                className="w-[36px] h-[36px] rounded-[50%] object-cover"
                src={Dp}
                alt=""
              />
              <span className="text-[20px] font-medium">Profile</span>
            </div>
          </Link>
        )}
        {search ? (
          <div className=" bottom-[0px] flex items-center mt-[260px] pb-5 fixed mt-[42px]">
            <MoreOptions />
          </div>
        ) : (
          <div className=" bottom-[0px] flex items-center mt-[260px] pb-5 fixed mt-[42px]">
            <MoreOptions /> <span className="text-[20px]">More</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navigation;
