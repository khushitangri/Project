import React, { useState } from "react";
import Navigation from ".";
import {
  Comments,
  Cross,
  Liked,
  NotificationIcon,
  RedSave,
  Save,
  Send,
} from "../../../Icons";
import Dp from "../../../Images/dp.jpg";
const Explore = ({
  exploring,
  togleSavedPic,
  setTogleSavedPic,
  setSaved,
}) => {
  const [exp, setExp] = useState();
  const [liked, setLiked] = useState();
  const [togle, setTogle] = useState(false);
  const [reply, setReply] = useState("");
  const [hide, setHide] = useState([]);
  const [cmntid, setCmntid] = useState();
  const ExploringPosting = (id) => {
    const val = exploring?.find((va) => va?.id === id);
    setExp(val);
    setTogle(true);
    console.log(exp);
  };
  const ChangeLiked = () => {
    setLiked(!liked);
  };
  const ChangingReply = (e) => {
    setReply(e.target.value);
  };
  const HideReply = (id) => {
    setHide((prev) => [...prev, { title: reply, id: id }]);
    setCmntid(id)
    setReply("");
  };
  const SavedImg = (id) => {
    setTogleSavedPic((prev) =>
      prev?.includes(id)
        ? setSaved(exploring?.filter((v) => v?.id !== id)) ||
          prev?.filter((v) => v !== id)
        : setSaved((pre) => [...pre, exploring?.find((v) => v?.id === id)]) || [
            ...prev,
            id,
          ]
    ); 
  };
  return (
    <div className="bg-black z-40">
      {togle ? (
        <div className="flex z-30 fixed opacity-40">
          <div className="fixed h-[100%]">
            <Navigation />
          </div>
          <div className="py-4 ml-[400px] grid grid-cols-3 object-cover mr-40">
            {exploring?.map((value) => (
              <div>
                <img
                  className="h-[300px] w-[300px] pt-1 pl-1"
                  src={value?.image}
                  alt=""
                  onClick={() => ExploringPosting(value?.id)}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex z-30">
          <div className="fixed h-[100%]">
            <Navigation />
          </div>
          <div className="py-4 ml-[400px] grid grid-cols-3 object-cover mr-40">
            {exploring?.map((value) => (
              <div>
                <img
                  className="h-[300px] w-[300px] pt-1 pl-1"
                  src={value?.image}
                  alt=""
                  onClick={() => ExploringPosting(value?.id)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {togle && (
        <div className="z-50  top-10 flex px-64 fixed text-white">
          <div>
            <img
              className="w-[660px] h-[660px] object-cover"
              src={exp?.image}
              alt=""
            />
          </div>
          <div className="bg-black w-[660px] h-[660px] ">
            <div className="flex items-center gap-2 pl-4 py-4 border-b">
              <div>
                <img
                  className="w-[36px] h-[36px] rounded-[50%] object-cover"
                  src={exp?.image}
                  alt=""
                />
              </div>
              <div className="font-bold text-white ">{exp?.postBy}</div>
            </div>
            <div>
              {hide?.map(
                (v) =>
                  exp?.id === v?.id && (
                    <div className="flex gap-2 items-center ml-2 mt-2 text-[14px]" key={v?.id}>
                      <div>
                        <img
                          className="h-[36px] w-[36px] rounded-[50%] object-cover"
                          src={Dp}
                          alt=""
                        />
                      </div>
                      <div className="font-medium">k_tangri</div>
                      <div>{v?.title}</div>
                    </div>
                  )
              )}
            </div>
            <div className="absolute bottom-3 w-[32%]">
              <div className="border-y">
                <div className=" flex items-center justify-between mt-2 mx-2">
                  <div className="flex items-center gap-4 ">
                    <div onClick={ChangeLiked}>
                      {liked ? <Liked /> : <NotificationIcon />}
                    </div>
                    <div>
                      <Comments />    
                    </div>
                    <div>
                      <Send />
                    </div>
                  </div>
                  <div onClick={() => SavedImg(exp?.id)}>
                    {togleSavedPic?.includes(exp?.id) ? <RedSave /> : <Save />}
                  </div>
                </div>                                   <div className="font-bold py-3 px-2">
                  {liked ? exp?.Liked + 1 : exp?.Liked} likes
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <div>
                    <input
                      className="text-[15px] bg-black outline-none ml-2 w-[300px] h-10 pl-2 mt-2"
                      type="text"
                      placeholder="Add a comment..."
                      value = {exp?.id === cmntid ? reply : null}
                      onChange={ChangingReply}
                    />
                  </div>
                  {reply !== "" && (
                    <button
                      className="ml-[75px] font-medium text-blue-500"
                      onClick={() => HideReply(exp?.id)}
                    >
                      Post
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="pointer" onClick={() => setTogle(false)}>
            <Cross />
          </div>
        </div>
      )}
    </div>
  );
};
export default Explore;
