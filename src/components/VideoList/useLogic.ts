import { useEffect, useState } from "react"
import { VideoType, fetchVideoData } from "../../repositories/videoRepository"
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { videoListFilterState } from "../../store/videoSlice/selector"
import { setVideoList } from "../../store/videoSlice"
import { ClickEventHandlerType } from "../../types/event"

/**
 * custom hooks for video list logics
 */
const useVideoListLogic = () => {
  const dispatch = useAppDispatch()
  const videoList = useAppSelector(videoListFilterState)
  
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const loadData = async () => {
    setLoading(true)
    try{
      const data: VideoType[] = await fetchVideoData()
      dispatch(setVideoList(data))
    }catch(e: any){
      setError(e.message)
      console.log(e)
    }finally{
      setLoading(false)
    }
  }

  const handleClickVideo: ClickEventHandlerType = (e) => {
    // TODO: handle on video selected
    console.log(e)
  }

  useEffect(() => {
    loadData()
  }, [])

  return {
    loading,
    error,
    videoList,
    handleClickVideo
  }
}

export default useVideoListLogic