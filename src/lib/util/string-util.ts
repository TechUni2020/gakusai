export const sliceFirstStr = (str: string) => {
  return str.slice(1);
};

export const sliceAfterFiveStr = (str: string) => {
  return str.slice(0, 5);
};

export const convertPhoneNumber = (phoneNumber: string) => {
  return `+81 ${phoneNumber}`;
};
