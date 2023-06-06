import React from 'react';
import styles from './styles/videoListItem.module.less'
import { VideoType } from '../../repositories/videoRepository'
import { convertDistance, convertDuration } from '../../utils/convert';
import Spottable from '@enact/spotlight/Spottable';
import { ClickEventHandlerType } from '../../types/event';

type VideoListItemProps = {
  video: VideoType,
  handleClick?: ClickEventHandlerType
}

const VideoListItem: React.FC<VideoListItemProps> = ({
  video,
  handleClick
}) => {
  
  return (
    <div 
      id={`video-${video.id}`}
      className={`${styles.videoItemContainer} spottable`} 
      tabIndex={-1}
      onKeyDown={handleClick}
    >
      <img
        id={`video-${video.id}`}
        className={styles.videoImage}
        src={video.thumbnails.medium}
        alt=""
      />

      <div className={styles.videoTitleContainer}>
        <span className={styles.videoTitleItem}> {video.id} { video.name }</span>
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

export default Spottable(VideoListItem)