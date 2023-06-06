import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { VideoType } from '../../repositories/videoRepository'
import { FILTER_VIDEO_ALPHABETIC, FilterVideoTYpe } from '../../constantes/filterVideo'

type VideoState = {
  videos: VideoType[],
  filter: FilterVideoTYpe
}

const initialState: VideoState = {
  videos: [],
  filter: FILTER_VIDEO_ALPHABETIC
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
    }
  }
})

export const { setVideoList, setFilterVideo } = videoSlice.actions
export default videoSlice.reducer