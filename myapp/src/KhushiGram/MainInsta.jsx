import KhushiGram from "../KhushiGram";
import Explore from "../KhushiGram/LeftGram/Home/Explore";
import { Routes, Route } from "react-router-dom";
import ReelsMaking from "../KhushiGram/LeftGram/Home/ReelsMaking";
import MessageBox from "../KhushiGram/LeftGram/Home/MessageBox";
import RequestCom from "../KhushiGram/LeftGram/Home/RequestCom";
import PostsInsta from "../KhushiGram/LeftGram/Home/Posts";
import ProfileInsta from "../KhushiGram/LeftGram/Home/ProfileInsta";
import ReelsIcon from "../KhushiGram/LeftGram/Home/ReelsIcon";
import MyI from "../Images/me.jpg";
import MyII from "../Images/me1.jpg";
import My9 from "../Images/me3.jpg";
import Sis from "../Images/sis6.jpg";
import Bro2 from "../Images/me4.jpg";
import Bro from "../Images/bro5.jpg";
import { useState } from "react";
import SaveImg from "../KhushiGram/LeftGram/Home/SaveImg";
import Tagged from "../KhushiGram/LeftGram/Home/Tagged";
import Nimrt from "../Images/nimrat1.jpg";
import Prabh from "../Images/Prabh.jpg";
import Nirvair from "../Images/nirvair.jpg";
import Waheguru from "../Images/chaar.webp";
import Post from "../Images/girl1.avif";
import God from "../Images/shiv.avif";
import Prabh2 from "../Images/Prabh2.webp";
import Man from "../Images/man2.jpg";
import Bride from "../Images/bride.avif";
import Nimrat2 from "../Images/nimrat2.jpg";
import Girl from "../Images/man3.webp";
import Gt from "../Images/man1.jpg";
import Mata from "../Images/mata.webp";
import Mehndi from "../Images/mhndi.jpg";
import Sunanda from "../Images/sunanda.jpg";
import Baba from "../Images/baba.jpg";
import Girl2 from "../Images/girl2.jpg";
import Baby from "../Images/girls3.jpg";
import Grl from "../Images/baby1.jpg";
import Prabh3 from "../Images/prabh3.webp";
import Sonam from "../Images/sonam.jpg";
function MainInsta() {
  const Posts = [
    {
      image: MyI,
      id: 1,
      comment1: "😍😍",
      commentedBy: "poojaTangri",
      commentedDp: Sis,
      commentTime: "2w",
      LikedBy: "M_a_n_jit",
      Others: 21,
      postDate: "December 10",
    },
    {
      image: MyII,
      id: 3,
      LikedBy: "aixy_23",
      Others: 19,
      postDate: "December 1",
    },
    {
      image: My9,
      id: 4,
      comment1: "Nice ❤️❤️",
      commentedBy: "poojaTangri",
      commentedDp: Sis,
      commentTime: "6w",
      LikedBy: "KaurBal_12",
      Others: 24,
      postDate: "November 20 ",
    },
    {
      image: Bro,
      id: 5,
      LikedBy: "Raveena_bal",
      Others: 27,
      postDate: "November 7 ",
    },
    {
      image: Bro2,
      id: 7,
      comment1: "🌺",
      commentedBy: "nitinTangri",
      commentedDp: Bro,
      commentTime: "12w",
      LikedBy: "Manjit_kaur",
      Others: 19,
      postDate: " October 22",
    },
  ];
  const ExploringIds = [
    {
      image: Prabh,
      id: 1,
      Liked: 90021,
      postBy: "Prabh kaur",
    },
    {
      image: Nimrt,
      id: 2,
      Liked: 4403,
      postBy: "Nimrat khaira",
    },
    {
      image: Nirvair,
      id: 3,
      Liked: 33211,
      postBy: "Nirvair Pannu",
    },
    {
      image: Waheguru,
      id: 4,
      Liked: 33211,
      postBy: "rindu kaur.2",
    },
    {
      image: Post,
      id: 5,
      Liked: 33211,
      postBy: "M_a_n_i_s_h_a.2",
    },
    {
      image: God,
      id: 6,
      Liked: 33211,
      postBy: "rubina22",
    },
    {
      image: Prabh2,
      id: 7,
      Liked: 33211,
      postBy: "Prabh kaur",
    },
    {
      image: Man,
      id: 8,
      Liked: 33211,
      postBy: "mabish_thakur122",
    },
    {
      image: Bride,
      id: 9,
      Liked: 33211,
      postBy: "roshuni.2201",
    },
    {
      image: Nimrat2,
      id: 10,
      Liked: 33211,
      postBy: "Nimrat Khaira",
    },
    {
      image: Girl,
      id: 11,
      Liked: 33211,
      postBy: "randhir0987",
    },
    {
      image: Gt,
      id: 12,
      Liked: 33211,
      postBy: "utr566",
    },
    {
      image: Mata,
      id: 13,
      Liked: 33211,
      postBy: "mishu222",
    },
    {
      image: Mehndi,
      id: 14,
      Liked: 33211,
      postBy: "absolute_salon",
    },
    {
      image: Sunanda,
      id: 15,
      Liked: 33211,
      postBy: "sunanda_sharma",
    },
    {
      image: Baba,
      id: 16,
      Liked: 33211,
      postBy: "nawab_singh.2",
    },
    {
      image: Girl2,
      id: 17,
      Liked: 33211,
      postBy: "harika_999",
    },
    {
      image: Baby,
      id: 18,
      Liked: 33211,
      postBy: "k_uyg22",
    },
    {
      image: Grl,
      id: 19,
      Liked: 33211,
      postBy: "jivan_98",
    },
    {
      image: Prabh3,
      id: 20,
      Liked: 33211,
      postBy: "Prabh kaur",
    },
    {
      image: Sonam,
      id: 21,
      Liked: 33211,
      postBy: "sonam_bajwa",
    },
  ];
  const [posts, setPosts] = useState(Posts);
  const [togle, setTogle] = useState();
  const [saved, setSaved] = useState([]);
  const [togleSavedPic, setTogleSavedPic] = useState([]);
  const [exploring, setExploring] = useState(ExploringIds);
  return (
    <>
      <div className="bg-black h-[1200px]">
        <Routes>
          <Route
            path="/"
            element={
              <KhushiGram
                saved={saved}
                setSaved={setSaved}
                togleSavedPic={togleSavedPic}
                setTogleSavedPic={setTogleSavedPic}
              />
            }
          />
          <Route
            path="/explore"
            element={
              <Explore
                exploring={exploring}
                setExploring={setExploring}
                posts={posts}
                setPosts={setPosts}
                togle={togle}
                setTogle={setTogle}
                togleSavedPic={togleSavedPic}
                setTogleSavedPic={setTogleSavedPic}
                saved={saved}
                setSaved={setSaved}
              />
            }
          />
          <Route path="/reels" element={<ReelsMaking />} />
          <Route exact path="/messages" element={<MessageBox />}/>
          <Route exact path="/message/request" element={<RequestCom />} />
          <Route
            path="/profile"
            element={<PostsInsta posts={posts} togle={togle} />}
          >
            <Route
              path="/profile/"
              element={
                <ProfileInsta
                  posts={posts}
                  setPosts={setPosts}
                  togle={togle}
                  setTogle={setTogle}
                  togleSavedPic={togleSavedPic}
                  setTogleSavedPic={setTogleSavedPic}
                  saved={saved}
                  setSaved={setSaved}
                />
              }
            />
            <Route path="/profile/reels" element={<ReelsIcon />} />
            <Route
              path="/profile/saved"
              element={
                <SaveImg
                  saved={saved}
                  setSaved={setSaved}
                  togleSavedPic={togleSavedPic}
                  setTogleSavedPic={setTogleSavedPic}
                />
              }
            />
            <Route path="/profile/tagged" element={<Tagged />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default MainInsta;
