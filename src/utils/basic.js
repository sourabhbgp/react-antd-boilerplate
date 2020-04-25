const getDate = data => {
  const WEEK = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const DATE = new Date(data);
  const day = WEEK[DATE.getDay()];
  const date = DATE.getDate();
  const month = MONTHS[DATE.getMonth()];
  const year = DATE.getFullYear();
  const hours = DATE.getHours();
  const minutes = DATE.getMinutes();
  const seconds = DATE.getSeconds();

  return { day, date, month, year, hours, minutes, seconds };
};

export { getDate };
