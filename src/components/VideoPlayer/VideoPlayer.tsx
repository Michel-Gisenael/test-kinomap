import React from 'react'
import FloatingLayer from '@enact/ui/FloatingLayer';
import styles from './style.module.less'
import useVideoPlayerLogic from './useLogic';
import {VideoPlayerBase} from '@enact/sandstone/VideoPlayer';
import { IMAGE_DUMMY, VIDEO_DUMMY } from '../../constantes/data';
import Container from '../ContainerSpotlight';
const VideoPlayerComponent: React.FC = () => {
  const {
    videoToPlay,
    handleKeyDown,
    videoPlayerRef,
    handleStopVideo
  } = useVideoPlayerLogic()
  return (
    <FloatingLayer open={videoToPlay ? true : false} >
      {
        videoToPlay && (
          <Container spotlightId='video-player'>
            <div 
              className={`spottable ${styles.videoPlayerContainer}`} 
              id="player"
              onKeyDown={handleKeyDown}
              ref={videoPlayerRef}
              tabIndex={-1}
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
    </FloatingLayer>
  )
}

export default VideoPlayerComponent