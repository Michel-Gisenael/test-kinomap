import React from 'react'
import styles from './style.module.less'
import useVideoPlayerLogic from './useLogic';
import {VideoPlayerBase} from '@enact/sandstone/VideoPlayer';
import { IMAGE_DUMMY, VIDEO_DUMMY } from '../../constantes/data';
import Container from '../ContainerSpotlight';
import Alert from '@enact/sandstone/Alert';
import './customstyle.css'

/**
 * There is to key down listener
 * the first is when the video player appeard and focused
 * we can listen to keydown without using video controll, 
 * so we can check the stop keydown
 * 
 * the second is when we navigate on the button control
 * we check if is stop keydown
 * 
 * in the two case we go back to main view
 */

const VideoPlayerComponent: React.FC = () => {
  const {
    videoToPlay,
    handleKeyDown,
    videoPlayerRef,
    handleStopVideo
  } = useVideoPlayerLogic()
  return (
    <Alert open={videoToPlay ? true : false} >
      {
        videoToPlay && (
          <Container spotlightId='video-player'>
            <div 
              className={`${styles.videoPlayerContainer}`} 
              id="player"
              onKeyDown={handleKeyDown}
              ref={videoPlayerRef}
            >
              <VideoPlayerBase
                title={videoToPlay.name} 
                poster={IMAGE_DUMMY}
                onKeyDown={handleKeyDown}
                src={VIDEO_DUMMY}
                onBack={handleStopVideo}
              >
              </VideoPlayerBase>
            </div>
          </Container>
        )
      }
    </Alert>
  )
}

export default VideoPlayerComponent