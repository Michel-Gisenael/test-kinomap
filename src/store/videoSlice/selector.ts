import { RootState } from "..";

export const videoListState = ({ video }: RootState) => video.videos
export const filterVideoState = ({ video }: RootState) => video.filter

export const videoListFilterState = ({ video }: RootState) => {
  const { filter, videos } = video
  return videos
}