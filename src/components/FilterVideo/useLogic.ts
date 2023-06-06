import { useState } from "react"
import { FILTER_VIDEO_ALPHABETIC, FilterVideoTYpe } from '../../constantes/filterVideo'

/**
 * custom hooks for video filter logics
 */

const useLogicFilterVideo = () => {
  /**
   * state of current value filter
   * set alphabetic as default value
   */
  const [current, setCurrent] = useState<FilterVideoTYpe>(FILTER_VIDEO_ALPHABETIC)

  return {
    setCurrent,
    current
  }
}

export default useLogicFilterVideo