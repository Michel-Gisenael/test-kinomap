import React from 'react';
import useVideoListLogic from './useLogic';
import VideoListItem from './VideoListItem';
import styles from './styles/videoContainer.module.less'
import { VideoType } from '../../repositories/videoRepository';
import Loader from '../Loader';
import Container from '../ContainerSpotlight';
import { useAppSelector } from '../../store/hook';
import { isPlayingVideoState } from '../../store/videoSlice/selector';

const VideoList: React.FC = () => {
  const {
    videoList,
    loading,
    handleClickVideo
  } = useVideoListLogic()

  const isPlaying = useAppSelector(isPlayingVideoState)

  return loading
    ? (
      <Loader />
    ) : (
      <Container 
        spotlightId='video-list'
        spotlightDisabled={isPlaying}
      >
        <div className={styles.videoContainer} id="video-list">
            {videoList.map((video: VideoType) => (
              <VideoListItem
                video={video}
                key={`video-item-${video.id}`}
                handleClick={handleClickVideo}
              />
            ))}
        </div>
      </Container>
    )
}

VideoList.displayName = 'VideoListComponent'

export default VideoList