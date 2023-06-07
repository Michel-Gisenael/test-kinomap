export type FilterVideoTYpe = {
  label: string,
  value: string
}

export const FILTER_VIDEO_ALPHABETIC_VALUE = 'alphabetic';
export const FILTER_VIDEO_DISTANCE_VALUE = 'distance';
export const FILTER_VIDEO_DURATION_VALUE = 'duration';

export const FILTER_VIDEO_ALPHABETIC: FilterVideoTYpe = {
  label: 'Alphabétique',
  value: FILTER_VIDEO_ALPHABETIC_VALUE
}

export const FILTER_VIDEO_DISTANCE: FilterVideoTYpe = {
  label: 'Distance',
  value: FILTER_VIDEO_DISTANCE_VALUE
}

export const FILTER_VIDEO_DURATION: FilterVideoTYpe = {
  label: 'Durée',
  value: FILTER_VIDEO_DURATION_VALUE
}

export const FILTER_VIDEO_LIST: FilterVideoTYpe[] = [
  FILTER_VIDEO_ALPHABETIC,
  FILTER_VIDEO_DISTANCE,
  FILTER_VIDEO_DURATION
]