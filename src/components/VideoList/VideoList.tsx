import React from 'react';
import useVideoListLogic from './useLogic';
import VideoListItem from './VideoListItem';
import styles from './styles/videoContainer.module.less'
import { VideoType } from '../../repositories/videoRepository';
import Loader from '../Loader';

const VideoList: React.FC = () => {
  const {
    videoList,
    loading
  } = useVideoListLogic()

  const handleClick = () => {

  }

  return loading
    ? (
      <Loader />
    ) : (
      <div className={styles.videoContainer}>
          {videoList.map((video: VideoType) => (
            <VideoListItem
              video={video}
              key={`video-item-${video.id}`}
              handleClick={handleClick}
            />
          ))}
      </div>
    )
}

VideoList.displayName = 'VideoListComponent'

export default VideoList