import React from 'react';
import styles from './styles.module.less'
import useLogicFilterVideo from './useLogic';
import { FILTER_VIDEO_LIST } from '../../constantes/filterVideo'
import Container from '../ContainerSpotlight';
import { useAppSelector } from '../../store/hook';
import { isPlayingVideoState } from '../../store/videoSlice/selector';

const FilterVideo: React.FC = () => {
  const {
    handleFilterChange,
    current
  } = useLogicFilterVideo()

  const isPlaying = useAppSelector(isPlayingVideoState)

  return (
    <Container 
      spotlightId='video-filter'
      spotlightDisabled={isPlaying}
    >
      <div className={styles.filterContainer} >
        <label  htmlFor="video-filter">Filtrer par</label>
        <select 
          id="video-filter" 
          className={`${styles.filterSelect} spottable`}
          onChange={handleFilterChange}
          value={JSON.stringify(current)}
          tabIndex={-1}
        >
          {
            FILTER_VIDEO_LIST.map((filter, i) => (
              <option 
                value={JSON.stringify(filter)} 
                key={`filter-${filter.value}`}
                className={styles.filterSelectOption}
              >
                {filter.label}
              </option>
            ))
          }
        </select>
      </div>
    </Container>
  )
}

export default FilterVideo