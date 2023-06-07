import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { VideoType } from '../../repositories/videoRepository'
import { FILTER_VIDEO_ALPHABETIC, FilterVideoTYpe } from '../../constantes/filterVideo'

type VideoState = {
  videos: VideoType[],
  filter: FilterVideoTYpe,
  played: VideoType | null
}

const initialState: VideoState = {
  videos: [],
  filter: FILTER_VIDEO_ALPHABETIC,
  played: null
}

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setVideoList: (state, action: PayloadAction<VideoType[]>) => {
      state.videos = action.payload
    },
    setFilterVideo: (state, action: PayloadAction<FilterVideoTYpe>) => {
      state.filter = action.payload
    },
    setPlayVideo: (state, action: PayloadAction<VideoType | null>) => {
      state.played = action.payload
    }
  }
})

export const { 
  setVideoList, 
  setFilterVideo,
  setPlayVideo 
} = videoSlice.actions
export default videoSlice.reducer