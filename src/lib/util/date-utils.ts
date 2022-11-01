import { ReceivingTimeKey } from "@/type/Order";

export const calcReceivingTime = (timeKey: ReceivingTimeKey, currentTime: Date) => {
  const timeStamp = currentTime.getTime();
  switch (timeKey) {
    case "now":
      return currentTime;
      break;
    case "10min":
      const tenMinToMs = 1000 * 60 * 10;
      return new Date(timeStamp + tenMinToMs);
      break;
    case "20min":
      const twentyToMs = 1000 * 60 * 20;
      return new Date(timeStamp + twentyToMs);
      break;
    case "30min":
      const thirtyToMs = 1000 * 60 * 20;
      return new Date(timeStamp + thirtyToMs);
      break;
    case "unknown":
      return null;
      break;
    default:
      return null;
  }
};
