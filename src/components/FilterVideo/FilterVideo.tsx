import React from 'react';
import styles from './styles.module.less'
import useLogicFilterVideo from './useLogic';
import { FILTER_VIDEO_LIST } from '../../constantes/filterVideo'
import Container from '../ContainerSpotlight';
import { useAppSelector } from '../../store/hook';
import { isPlayingVideoState } from '../../store/videoSlice/selector';
import Dropdown from '@enact/sandstone/Dropdown';
import './customstyle.css'

const FilterVideo: React.FC = () => {
  const {
    handleFilterChange,
    currentSelected
  } = useLogicFilterVideo()

  const isPlaying = useAppSelector(isPlayingVideoState)

  return (
    <Container 
      spotlightId='video-filter'
      spotlightDisabled={isPlaying}
    >
      <div className={styles.filterContainer} >
        <label  htmlFor="video-filter">Filtrer par</label>

        <Dropdown
          onSelect={handleFilterChange}
          selected={currentSelected()}
          size='small'
        >
          {
            FILTER_VIDEO_LIST.map((filter) => ({
              children: filter.label,
              key: filter.value
            }))
          }
        </Dropdown>
      </div>
    </Container>
  )
}

export default FilterVideo