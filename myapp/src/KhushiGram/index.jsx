import React, { createContext } from "react";
import LeftGram from "./LeftGram";
import axios from "axios";
import { useState, useEffect } from "react";
import "./index.css";
import Centergram from "./CenterGram";
import RightGram from "./RightGram";
import Load from "../../src/Images/lo.png";
const Apis = createContext();
const StateHandle = createContext();

const KhushiGram = ({ saved, setSaved, togleSavedPic, setTogleSavedPic }) => {
  const [loading, setLoading] = useState(true);
  const [one, setOne] = useState();
  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      const arr = res?.data.users;
      setOne(arr);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="bg-white h-[750px] flex justify-center items-center fixed w-[100%] ">
          {" "}
          {/* <span className="text-blue-600">Loading...</span> */}
          <img className="h-[56px] w-[56px] animate-spin" src={Load} alt="" />
        </div>
      ) : (
        <div className="KhushiGram">
          <Apis.Provider value={one}>
            <LeftGram />
          </Apis.Provider>
          <Apis.Provider value={one}>
            <Centergram
              saved={saved}
              setSaved={setSaved}
              togleSavedPic={togleSavedPic}
              setTogleSavedPic={setTogleSavedPic}
            />
          </Apis.Provider>
          <RightGram />
        </div>
      )}
    </div>
  );
};
export default KhushiGram;
export { Apis, StateHandle };
