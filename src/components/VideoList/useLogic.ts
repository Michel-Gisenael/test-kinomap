import { useEffect, useState } from "react"
import { VideoType, fetchVideoData } from "../../repositories/videoRepository"

/**
 * custom hooks for video list logics
 */
const useVideoListLogic = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [videoList, setVideoList] = useState<VideoType[]>([])

  const loadData = async () => {
    setLoading(true)
    try{
      const data: VideoType[] = await fetchVideoData()
      setVideoList(data)
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