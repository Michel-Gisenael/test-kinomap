import React from 'react';
import styles from './styles.module.less'
import useLogicFilterVideo from './useLogic';
import { FILTER_VIDEO_LIST } from '../../constantes/filterVideo'

const FilterVideo: React.FC = () => {
  const {
    handleFilterChange,
    current
  } = useLogicFilterVideo()

  return (
    <div className={`${styles.filterContainer}`}>
      <label  htmlFor="video-filter">Filtrer par</label>
      <select 
        id="video-filter" 
        className={styles.filterSelect}
        onChange={handleFilterChange}
        value={JSON.stringify(current)}
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
  )
}

export default (FilterVideo)