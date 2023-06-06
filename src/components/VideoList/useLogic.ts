import { useEffect, useState } from "react"
import { VideoType, fetchVideoData } from "../../repositories/videoRepository"
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { videoListFilterState } from "../../store/videoSlice/selector"
import { setVideoList } from "../../store/videoSlice"

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

  useEffect(() => {
    loadData()
  }, [])

  return {
    loading,
    error,
    videoList
  }
}

export default useVideoListLogic