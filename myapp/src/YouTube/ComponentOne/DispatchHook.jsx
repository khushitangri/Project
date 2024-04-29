import { useContext } from "react";
import VideoDispatchContext from "./VideoDispatchContext";

function useDispatch(){

 return useContext(VideoDispatchContext)
}
export default useDispatch;
