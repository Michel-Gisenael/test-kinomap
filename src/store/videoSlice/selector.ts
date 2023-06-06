import { RootState } from "..";
import { VideoType } from "../../repositories/videoRepository";
import { FILTER_VIDEO_DISTANCE_VALUE, FILTER_VIDEO_DURATION_VALUE } from '../../constantes/filterVideo'

export const videoListState = ({ video }: RootState) => video.videos
export const filterVideoState = ({ video }: RootState) => video.filter

export const videoListFilterState = ({ video }: RootState) => {
  const { filter, videos } = video
  switch(filter.value){
    case FILTER_VIDEO_DISTANCE_VALUE: return filterVideoByDistance(videos)
    case FILTER_VIDEO_DURATION_VALUE: return filterVideoByDuration(videos)
    default: return filterVideoByTitle(videos)
  }
}

const filterVideoByTitle = (videos: VideoType[]) => {
  const tmp  = [...videos]
  tmp.sort((a, b) => a.name.localeCompare(b.name))
  return tmp
}

const filterVideoByDistance = (videos: VideoType[]) => {
  const tmp  = [...videos]
  tmp.sort((a, b) => a.distance - b.distance)
  return tmp
}

const filterVideoByDuration = (videos: VideoType[]) => {
  const tmp  = [...videos]
  tmp.sort((a, b) => a.duration - b.duration)
  return tmp
}
