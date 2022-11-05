import { ReceivingTimeKey } from "@/type/Order";

export const timeStampToTimeStr = (timeStamp: number) => {
  const date = new Date(timeStamp * 1000);
  const HH = `0${date.getHours()}`.slice(-2);
  const mm = `0${date.getMinutes()}`.slice(-2);
  const ss = `0${date.getSeconds()}`.slice(-2);

  return `${HH}:${mm}:${ss}`;
};

export const calcReceivingTime = (timeKey: ReceivingTimeKey, currentTime: Date) => {
  const timeStamp = currentTime.getTime();
  switch (timeKey) {
    case "now":
      return currentTime;
      break;
    case "5min":
      const fiveMinToMs = 1000 * 60 * 5;
      return new Date(timeStamp + fiveMinToMs);
      break;
    case "10min":
      const tenMinToMs = 1000 * 60 * 10;
      return new Date(timeStamp + tenMinToMs);
      break;
    case "15min":
      const fifteenMinToMs = 1000 * 60 * 15;
      return new Date(timeStamp + fifteenMinToMs);
      break;
    case "20min":
      const twentyMinToMs = 1000 * 60 * 20;
      return new Date(timeStamp + twentyMinToMs);
      break;
    case "30min":
      const thirtyMinToMs = 1000 * 60 * 30;
      return new Date(timeStamp + thirtyMinToMs);
      break;
    case "60min":
      const sixtyMinToMs = 1000 * 60 * 60;
      return new Date(timeStamp + sixtyMinToMs);
    default:
      return currentTime;
  }
};
