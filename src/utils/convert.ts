// convert video duration to minutes
export const convertDuration = (value: number): string => {
  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value % 3600) / 60);
  const remainingSeconds = value % 60;

  return `${padZero(hours)}:${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

// convert video distance to km
export const convertDistance = (value: number): string => (`${value / 1000}km`)

function padZero(number: number) {
  return number.toString().padStart(2, '0');
}