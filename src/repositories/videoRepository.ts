import axios from '../configs/axios';
const baseUrl: string =  process.env.REACT_APP_API_URL ?? ''

export type ThumbnailVideoType = {
  large: string,
  medium: string,
  small: string
}

export type VideoType = {
  distance: number,
  duration: number,
  id: number,
  name: string,
  thumbnails: ThumbnailVideoType,
  video_url_sd: string
}

type ResultVideoType = {
  data: VideoType
}

// method to fetch data
export const fetchVideoData = async (): Promise<VideoType[]> => {
  const result = await axios.get(baseUrl).then(res => res.data)
  if(result) {
    const videoList: VideoType[] = result[Object.keys(result)[0]].data
      .map((item: ResultVideoType) => item.data)

    return videoList
  }
  else throw new Error('Data not exist')
}