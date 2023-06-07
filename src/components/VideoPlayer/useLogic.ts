import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { playedVideoState } from "../../store/videoSlice/selector"
import Spotlight from "@enact/spotlight"
import { setPlayVideo } from "../../store/videoSlice"

const useVideoPlayerLogic = () => {
  const dispatch = useAppDispatch()
  const videoToPlay = useAppSelector(playedVideoState)

  const handleStopVideo = () => {
    dispatch(setPlayVideo(null))
  }

  return {
    videoToPlay
  }
}

export default useVideoPlayerLogic