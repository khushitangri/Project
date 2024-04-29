import React, { useContext, useState } from "react";
import { Search } from "../../../../Icons";
import { Apis } from "../../../../KhushiGram";
const SearchBar = ({ search, setSearch }) => {
  const SearchingId = useContext(Apis);
  const [searched, setSearched] = useState("");
  const Searching = () => {
    setSearch(!search);
  };
  const SearchChange = (e) => {
    setSearched(e?.target?.value);
    console.log(searched, "ftghj");
  };
  const srch = SearchingId;

  console.log("search", srch);
  return (
    <div>
      <div onClick={Searching}>
        {search ? (
          <div className="flex gap-2 items-center fixed mt-[48px] ">
            <Search />
          </div>
        ) : (
          <div className="flex gap-2 items-center fixed mt-[36px]  ">
            <Search /> <div className="text-[20px]">Search</div>
          </div>
        )}
      </div>
      <div className="">
        {search && (
          <div className="bg-black ml-[60px] mt-[-106px]   w-[370px] fixed  h-[100%] rounded-r-2xl border-l ">
            <div className="font-medium pl-6 text-[25px] ">Search</div>
            <div className="border-b pb-4">
              <input
                className="ml-4 h-10 w-[330px] outline-none rounded-md bg-[#1c1e21] text-white pl-2 "
                type="text"
                value={searched}
                onChange={SearchChange}
                placeholder="Search"
              />
            </div>
            <div>
              {searched === "" ? (
                <div className="ml-6 mt-2 font-medium text-[18px]">Recent</div>
              ) : (
                srch
                  ?.filter((item) => {
                    return item?.username.includes(searched);
                  }) 
                  .map((ite) =>
                  <div className="flex items-center mx-6 gap-4">

                <div>
                  <img className="w-[40px] rounded-[50%]" src={ite?.image} alt="" />
                </div>
                <div>
                <div className="font-medium text-[16px]">{ite?.username}</div>
                   <div className="mt-[-30px] text-[#94a3b8] tracking-wide">{ite?.firstName} {ite?.lastName}</div>
                </div>
                 
                   </div>
                  
                  )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
