function returnDate() {
  let date = new Date();
  let year = date.getFullYear();
  const months = [
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
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let month = months[date.getMonth()];
  let day = days[date.getDay()];
  let dateNumber = date.getDate();
  let fullDate = `Today is ${day}, ${dateNumber} ${month} ${year}.`;
  let header = document.querySelector("#header");
  header.innerHTML = fullDate;
  return date;
}

returnDate();
//console.log(date);
