import React, { KeyboardEvent } from 'react';
import styles from './styles/videoListItem.module.less'
import { VideoType } from '../../repositories/videoRepository'
import { convertDistance, convertDuration } from '../../utils/convert';
import Spottable from '@enact/spotlight/Spottable';
import { IMAGE_DUMMY } from '../../constantes/data';
import { KEY_ENTER } from '../../constantes/keyCode';

type VideoListItemProps = {
  video: VideoType,
  handleClick?: (video: VideoType) => void
}

const VideoListItem: React.FC<VideoListItemProps> = ({
  video,
  handleClick = () => {}
}) => {

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if(e.keyCode === KEY_ENTER) handleClick(video)
  }
  
  return (
    <div 
      id={`video-${video.id}`}
      className={`${styles.videoItemContainer} spottable`} 
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      onClick={() => handleClick(video)}
    >
      <img
        id={`video-${video.id}`}
        className={styles.videoImage}
        src={IMAGE_DUMMY}
        alt=""
      />

      <div className={styles.videoTitleContainer}>
        <span className={styles.videoTitleItem}> { video.name }</span>
      </div>

      <div className={styles.extraInfoContainer}>
        <span className={styles.extraInfoItem}>{ convertDistance(video.distance) }</span>
        <span className={styles.extraInfoItem}>{ convertDuration(video.duration) }</span>
      </div>
    </div>
  )
}

VideoListItem.displayName = 'VideoListItemComponent'

export default Spottable(VideoListItem)