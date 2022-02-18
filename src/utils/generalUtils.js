export const currentYear = new Date().getFullYear();

export const formatDay = (day) => {
  let length = 3;
  return day?.toString().padStart(length, '0');
};

// grab today's date for current coding day
const date = new Date();
const currentMonth = date.getMonth() + 1;
const currentDate = date.getDate();
export const todaysDate = new Date(currentYear, currentMonth, currentDate);
