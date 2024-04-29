import React, { useState } from "react";
import Dp from "../../../Images/dp.jpg";
import {
  Liked,
  MoreIcons,
  NotificationIcon,
  Comments,
  Send,
  Save,
  RedSave,
  Cross,
} from "../../../Icons";

const ProfileInsta = ({
  posts,
  setPosts,
  togleSavedPic,
  setTogleSavedPic,
  saved,
  setSaved,
}) => {
  const [liked, setLiked] = useState();
  const [choose, setChoose] = useState();
  const [togle, setTogle] = useState();
  const [reply, setReply] = useState("");
  const [hide, setHide] = useState([]);
  const [cmntid, setCmntid] = useState();
  const [delt, setDelt] = useState(false);
  console.log("reply", reply);
  const ChooseImg = (id) => {
    const arr = posts?.find((v) => v?.id === id);
    setChoose(arr);
    setTogle(true);
    console.log(choose);
  };
  const TogleFalse = () => {
    setTogle(false);
  };
  const ReplyButton = (id) => {
    setReply(`@${choose?.commentedBy}`);
    setCmntid(id);
    console.log("cmntid", cmntid);
  };
  const ChangingReply = (e) => {
    setReply(e.target.value);
  };
  const HideReply = (id) => {
    setHide((prev) => [...prev, { title: reply, id: id }]);
    setReply("");
  };
  const ChangeLiked = () => {
    setLiked(!liked);
  };
  console.log("delt", delt);

  const DeletePost = (id) => {
    setDelt(true);
  };
  const CancelDlt = () => {
    setDelt(false);
  };
  const DeletedPosting = (id) => {
    const dlt = posts?.filter((v) => v?.id !== id);
    alert(`Are you sure to Delete This Post`);
    setPosts(dlt);
    setTogle(false);
  };
  console.log("post", posts);
  const SavedImg = (id) => {
    setTogleSavedPic((prev) =>
      prev?.includes(id)
        ? setSaved(saved?.filter((v) => v?.id !== id)) ||
          prev?.filter((v) => v !== id)
        : setSaved((pre) => [...pre, posts?.find((v) => v?.id === id)]) || [
            ...prev,
            id,
          ]
    );
  };
  console.log("saved", saved);
  return (
    <div>
      {togle ? (
        <div className="text-white bg-black  flex">
          <div className="mx-60 pl-60 mt-10 bg-black">
            <div className="mt-14 border-t ">
              <div>
                {togle && (
                  <div className="relative z-20 mt-[-368px] ml-[-710px] flex">
                    <div className="fixed ">
                      <img
                        className="w-[560px] h-[660px] object-cover"
                        src={choose?.image}
                        alt=""
                      />
                    </div>
                    {delt && (
                      <div className="z-40 relative h-[110px] text-center w-[300px] bg-gray-500 ml-[370px] mt-[250px] rounded-[10px]">
                        <button
                          className="text-red-500 py-4 border-b w-[100%]"
                          onClick={() => DeletedPosting(choose?.id)}
                        >
                          Delete
                        </button>{" "}
                        <br />
                        <button className=" py-4" onClick={CancelDlt}>
                          Cancel
                        </button>
                      </div>
                    )}

                    <div className="w-[460px] ml-[535px] h-[660px] bg-black border-[5%] fixed">
                      <div className="flex justify-between pt-1 pl-2 pb-2 border-b">
                        <div className="flex gap-1 items-center">
                          <div>
                            <img
                              className="w-[40px] h-[36px] rounded-[50%]"
                              src={Dp}
                              alt=""
                            />
                          </div>
                          <div className="font-medium ml-5">k_tangri</div>
                        </div>

                        <button
                          className="mr-[10px]"
                          onClick={() => DeletePost(choose?.id)}
                        >
                          <MoreIcons />
                        </button>
                      </div>
                      <button
                        onClick={TogleFalse}
                        className="ml-[460px] font-bold text-[20px] absolute top-1 z-[999999]"
                      >
                        <Cross />
                      </button>
                      <div>
                        <div className="pt-2">
                          <div>
                            {choose?.comment1 ? (
                              <div>
                                <div className="flex gap-2 items-center mt-2">
                                  <div>
                                    <img
                                      className="w-[40px] ml-2 h-[36px] rounded-[50%]"
                                      src={choose?.commentedDp}
                                      alt=""
                                    />
                                  </div>
                                  <div className="font-medium">
                                    {choose?.commentedBy}
                                  </div>
                                  <div>{choose?.comment1}</div>
                                </div>
                                <div>
                                  <div className="flex pl-16 gap-4 font-medium">
                                    <div className="text-gray-200 text-[13px] ">
                                      {choose?.commentTime}
                                    </div>
                                    <button
                                      className="text-gray-200 text-[13px]"
                                      onClick={() => ReplyButton(choose?.id)}
                                    >
                                      Reply
                                    </button>
                                  </div>
                                  {hide?.map(
                                    (v) =>
                                      choose?.id === v?.id && (
                                        <div className="flex gap-2 items-center ml-2 mt-2 text-[14px]">
                                          <div>
                                            <img
                                              className="h-[36px] w-[36px] rounded-[50%]"
                                              src={Dp}
                                              alt=""
                                            />
                                          </div>
                                          <div className="font-medium">
                                            k_tangri
                                          </div>
                                          <div>{v?.title}</div>
                                        </div>
                                      )
                                  )}
                                </div>
                              </div>
                            ) : (
                              <div className="text-center mt-[200px]">
                                <div className="font-bold text-[24px]">
                                  No Comments yet.
                                </div>
                                <div>Start the conversation.</div>
                              </div>
                            )}
                            <div className="border-t ml-[-2] w-[95%] absolute bottom-[10px]">
                              <div className="flex items-center justify-between mt-2 ml-2">
                                <div className="flex items-center gap-4 ">
                                  <div onClick={ChangeLiked}>
                                    {liked ? <NotificationIcon /> : <Liked />}
                                  </div>
                                  <div>
                                    <Comments />
                                  </div>
                                  <div>
                                    <Send />
                                  </div>
                                </div>
                                <div onClick={() => SavedImg(choose?.id)}>
                                  {togleSavedPic?.includes(choose?.id) ? (
                                    <RedSave />
                                  ) : (
                                    <Save />
                                  )}
                                </div>
                              </div>
                              <div>
                                <div className="pt-4 pl-4">
                                  <span>{`${choose?.LikedBy} and   ${
                                    liked ? choose?.Others - 1 : choose?.Others
                                  } others`}</span>
                                </div>
                                <div className="text-[13px] text-gray-400 pl-4 border-b pb-2">
                                  {choose?.postDate}
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div>
                                  <input
                                    className="text-[15px] bg-black outline-none ml-2 w-[300px] h-10 pl-2 mt-2"
                                    type="text"
                                    placeholder="Add a comment..."
                                    value={choose?.id === cmntid ? reply : null}
                                    onChange={ChangingReply}
                                  />
                                </div>
                                {reply !== "" && (
                                  <button
                                    className="ml-[75px] font-medium text-blue-500"
                                    onClick={() => HideReply(choose?.id)}
                                  >
                                    Post
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" grid grid-cols-3 p-2 mt-4">
          {posts?.map((val) => (
            <div key={val?.id} className="">
              <div>
                <img
                  className="h-[350px] w-[400px] p-[2px] object-cover"
                  src={val?.image}
                  alt=""
                  onClick={() => ChooseImg(val?.id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileInsta;
