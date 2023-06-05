import React from 'react';
import styles from './styles/videoListItem.module.less'
import { VideoType } from '../../repositories/videoRepository'
import { convertDistance, convertDuration } from '../../utils/convert';

type VideoListItemProps = {
  video: VideoType,
  handleClick?: () => void
}

const VideoListItem: React.FC<VideoListItemProps> = ({
  video
}) => {
  return (
    <div className={styles.videoItemContainer}>
      <img
        className={styles.videoImage}
        src={video.thumbnails.medium}
        alt=""
      />

      <div className={styles.videoTitleContainer}>
        <span className={styles.videoTitleItem}>{ video.name }</span>
      </div>

      <div className={styles.extraInfoContainer}>
        <span className={styles.extraInfoItem}>{ convertDistance(video.distance) }</span>
        <span className={styles.extraInfoItem}>{ convertDuration(video.duration) }</span>
      </div>
    </div>
  )
}

VideoListItem.displayName = 'VideoListItemComponent'
VideoListItem.defaultProps = {
  handleClick: () => {}
}

export default VideoListItem