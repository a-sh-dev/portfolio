export const currentYear = new Date().getFullYear();

export const formatDay = (day) => {
  let length = 3;
  return day?.toString().padStart(length, '0');
};
