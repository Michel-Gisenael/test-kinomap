import { RootState } from "..";
import { VideoType } from "../../repositories/videoRepository";
import { FILTER_VIDEO_DISTANCE_VALUE, FILTER_VIDEO_DURATION_VALUE } from '../../constantes/filterVideo'

export const videoListState = ({ video }: RootState) => video.videos
export const filterVideoState = ({ video }: RootState) => video.filter
export const playedVideoState = ({ video }: RootState) => video.played
export const isPlayingVideoState = ({ video }: RootState) => video.played ? true : false

export const videoListFilterState = ({ video }: RootState) => {
  const { filter, videos } = video
  const tmpVideo = [...videos]
  switch(filter.value){
    case FILTER_VIDEO_DISTANCE_VALUE: filterVideoByDistance(tmpVideo)
      break;
    case FILTER_VIDEO_DURATION_VALUE: filterVideoByDuration(tmpVideo)
      break;
    default: filterVideoByTitle(tmpVideo)
      break;
  }

  return tmpVideo
}

const filterVideoByTitle = (videos: VideoType[]) => videos.sort((a, b) => a.name.localeCompare(b.name))
const filterVideoByDistance = (videos: VideoType[]) => videos.sort((a, b) => a.distance - b.distance)
const filterVideoByDuration = (videos: VideoType[]) => videos.sort((a, b) => a.duration - b.duration)
