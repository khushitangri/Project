import React, { useState } from "react";
import Dp from "../../../Images/dp.jpg";
import {
  MoreIcons,
  NotificationIcon,
  Liked,
  Comments,
  Send,
  Save,
  RedSave,
  Cross,
} from "../../../Icons";

const SaveImg = ({ saved, setSaved, togleSavedPic, setTogleSavedPic }) => {
  const [liked, setLiked] = useState();
  const [choose, setChoose] = useState();
  const [togle, setTogle] = useState();
  const [reply, setReply] = useState("");
  const [hide, setHide] = useState([]);
  const [delt, setDelt] = useState(false);
  console.log("saved", saved);
  const ChooseImg = (id) => {
    const arr = saved?.find((v) => v?.id === id);
    setChoose(arr);
    setTogle(true);
    console.log(choose);
  };

  const SavedImg = (id) => {
    setTogleSavedPic((prev) =>
      prev?.includes(id)
        ? setSaved(saved?.filter((v) => v?.id !== id)) ||
          prev?.filter((v) => v !== id)
        : setSaved((pre) => [...pre, saved?.find((v) => v?.id === id)]) || [
            ...prev,
            id,
          ]
    );
  };
  const TogleFalse = () => {
    setTogle(false);
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

  return (
    <div className="pt-2">
      <div className="text-[13px] text-gray-300">
        Only you can see what you've saved
      </div>
      <div>
        {saved.length===0  ? (
          <div className="text-center">
            <div className="text-[24px] font-black mt-20">Start Saving</div>
            <div className="mt-2">
              Save photos and videos to your collection.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 p-2 mt-4">
            {saved?.map((v) => (
              <div
                className="p-1"
                onClick={() => {
                  ChooseImg(v?.id);
                }}
              >
                <img
                  className="border h-[300px] w-[250px] object-cover"
                  src={v?.image}
                  alt=""
                />
              </div>
            ))}

            <div>
              {togle && (
                <div className="absolute top-10 left-40">
                  <div className="flex fixed">
                    <div className="bg-black">
                      <img
                        className="w-[560px] h-[660px] "
                        src={choose?.image}
                        alt=""
                      />
                    </div>
                    <div className="w-[560px] h-[660px] bg-black">
                      <div className="flex justify-between pt-1 pl-2 pb-2 border-b">
                        <div className="flex gap-1 items-center">
                          <div>
                            <img
                              className="w-[40px] h-[36px] rounded-[50%] object-cover"
                              src={choose?.image}
                              alt=""
                            />
                          </div>
                          <div className="font-medium ml-5">
                            {choose?.firstName || choose?.postBy ||`k_tangri` } 
                          </div>
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
                        className="ml-[700px] font-bold text-[20px] absolute top-0"
                      >
                       <Cross/>
                      </button>
                      <div>
                        <div className="pt-2">
                          <div>
                            <div className="text-center mt-[200px]">
                              <div className="font-bold text-[24px]">
                                No Comments yet.
                              </div>
                              <div>Start the conversation.</div>
                            </div>

                            <div className="border-t ml-[-2]  absolute bottom-[10px] w-[46%]">
                              <div className="flex justify-between items-center  mt-2 ml-2">
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
                                  <span>
                                    {liked ? (
                                      `${choose?.height || choose?.Liked || choose?.Others - 1} Likes`
                                    ) : (
                                      <div className="flex gap-2 items-center">
                                        <img
                                          className="w-[36px] h-[36px] rounded-[50%]"
                                          src={Dp}
                                          alt=""
                                        />
                                        <div>
                                          {`You and ${
                                            choose?.height ||  choose?.Others || choose?.Liked
                                          } others`}
                                        </div>
                                      </div>
                                    )}{" "}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div>
                                  <input
                                    className="text-[15px] bg-black outline-none ml-2 w-[300px] h-10 pl-2 mt-2"
                                    type="text"
                                    placeholder="Add a comment..."
                                  />
                                </div>
                              </div>
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
        )}
      </div>
    </div>
  );
};

export default SaveImg;
