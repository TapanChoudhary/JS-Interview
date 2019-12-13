const convertTime = time => {
  let hour = time.substring(0, 2);
  let min = time.substring(3, 5);
  let indicator = time.substring(5, 7);

  return hour < 12 && indicator == "PM"
    ? `${parseInt(hour) + 12}:${min}`
    : `${hour}:${min}`;
};

console.log(convertTime("13:23AM"));
