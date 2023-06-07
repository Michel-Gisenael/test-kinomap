import { KeyboardEvent, useCallback} from "react"
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { playedVideoState } from "../../store/videoSlice/selector"
import { setPlayVideo } from "../../store/videoSlice"
import { KEY_STOP } from "../../constantes/keyCode"

const useVideoPlayerLogic = () => {
  const dispatch = useAppDispatch()
  const videoToPlay = useAppSelector(playedVideoState)

  /**
   * focus the video player component 
   * to make the keydown remote control available without navigating on video control
   * */ 
  const videoPlayerRef = useCallback((e: any) => {
    if(e) e.focus()
  }, [])

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if(e.keyCode === KEY_STOP) dispatch(setPlayVideo(null))
  }

  return {
    videoToPlay,
    handleKeyDown,
    videoPlayerRef
  }
}

export default useVideoPlayerLogic