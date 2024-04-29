import { useContext } from "react";
import VideoContext from "./VideoContext";

const useVideosHooks =()=>{
return useContext(VideoContext)
}
export default useVideosHooks;