const turnBirthdayIntoAge = (age) => {
  const today = new Date();
  const year = today.getFullYear().toString();
  const month = addZeroToSingleDate(today.getMonth().toString());
  const day = addZeroToSingleDate(today.getDate().toString());
  const date = Number(year + month + day);
  const realage = (date - age).toString().slice(0,2);
  return realage;
}

const addZeroToSingleDate = (dateString) => {
  if (dateString.length === 1) {
    dateString = '0' + dateString
  }
  return dateString;
}

export default turnBirthdayIntoAge;