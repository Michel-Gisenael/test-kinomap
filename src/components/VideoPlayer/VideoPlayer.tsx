import React from 'react'
import FloatingLayer from '@enact/ui/FloatingLayer';
import styles from './style.module.less'
import useVideoPlayerLogic from './useLogic';
import VideoPlayer from '@enact/sandstone/VideoPlayer';
import { IMAGE_DUMMY, VIDEO_DUMMY } from '../../constantes/data';
import {MediaControls} from '@enact/sandstone/MediaPlayer';
import Container from '../ContainerSpotlight';

const VideoPlayerComponent: React.FC = () => {
  const {
    videoToPlay
  } = useVideoPlayerLogic()
  return (
    <FloatingLayer open={videoToPlay ? true : false} >
      {
        videoToPlay && (
          <Container spotlightId='video-player'>
            <div 
              className={styles.videoPlayerContainer} 
              id="player"
              onFocus={() => console.log('focuse')}
            >
              <VideoPlayer title={videoToPlay.name} poster={IMAGE_DUMMY}>
                <source src={VIDEO_DUMMY} type="video/mp4" />
                <MediaControls id="media-player-control">
                </MediaControls>
              </VideoPlayer>
            </div>
          </Container>
        )
      }
    </FloatingLayer>
  )
}

export default VideoPlayerComponent