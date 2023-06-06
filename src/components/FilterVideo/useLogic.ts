import { ChangeEvent } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { filterVideoState } from "../../store/videoSlice/selector"
import { setFilterVideo } from "../../store/videoSlice"

/**
 * custom hooks for video filter logics
 */

const useLogicFilterVideo = () => {
  const dispatch = useAppDispatch()
  const current = useAppSelector(filterVideoState)

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilterVideo(JSON.parse(e.target.value)))
  }

  return {
    handleFilterChange,
    current
  }
}

export default useLogicFilterVideo