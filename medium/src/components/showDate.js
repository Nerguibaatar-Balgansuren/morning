const showDate = (time) => {
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
  
    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
  
    const dt = new Date();
  
    const y = year == dt.getFullYear() ? "" : ", " + year;
    return ` ${month} ${date} ${y}`;
  };
  
  export default showDate;
  