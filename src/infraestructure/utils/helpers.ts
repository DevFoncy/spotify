const isObjEmpty = (obj: object) => {
  return Object.keys(obj).length === 0;
};

const secondsInDay = () => {
  return 24 * 60 * 60 * 1000;
};

//Check if the request takes more than 1 day
export const getAvailableRequest = (object: string, timestamp: string) => {
  const cachedData = localStorage.getItem(object);
  //@ts-ignore-line
  const cachedTimestamp = localStorage.getItem(timestamp);
  const isCacheValid =
    cachedTimestamp &&
    new Date().getTime() - parseInt(cachedTimestamp) < secondsInDay();
  return {
    //@ts-ignore-file
    isAvailable:
      cachedData && !isObjEmpty(JSON.parse(cachedData)) && isCacheValid,
    dataSaved: cachedData,
  };
};

export const msToTime = (duration: any) => {
  if (!duration) {
    return "-";
  }
  let milliseconds = Math.floor((duration % 1000) / 100);
  let seconds: string | number = Math.floor((duration / 1000) % 60);
  let minutes: string | number = Math.floor((duration / (1000 * 60)) % 60);
  let hours: string | number = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
};
