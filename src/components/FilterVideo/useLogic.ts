import { ChangeEvent } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { filterVideoState } from "../../store/videoSlice/selector"
import { setFilterVideo } from "../../store/videoSlice"
import { FILTER_VIDEO_LIST } from '../../constantes/filterVideo'

/**
 * custom hooks for video filter logics
 */

type SelecHandlerDataType = {
  data: string,
  selected: number,
  type: string
}

const useLogicFilterVideo = () => {
  const dispatch = useAppDispatch()
  const current = useAppSelector(filterVideoState)

  const handleFilterChange = (e: SelecHandlerDataType) => {
    dispatch(setFilterVideo(FILTER_VIDEO_LIST[e.selected]))
  }

  const currentSelected = () => {
    const i = FILTER_VIDEO_LIST.findIndex(e => e.value == current.value)
    return i < 0 ? 0 : i
  }

  return {
    handleFilterChange,
    currentSelected
  }
}

export default useLogicFilterVideo