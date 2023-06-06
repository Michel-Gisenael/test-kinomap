// convert video duration to minutes
export const convertDuration = (value: number): string => {
  const hours = Math.floor(value / (1000 * 60 * 60));
  const minutes = Math.floor((value % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((value % (1000 * 60)) / 1000);

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// convert video distance to km
export const convertDistance = (value: number): string => (`${value / 1000}km`)