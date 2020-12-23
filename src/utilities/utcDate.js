import humanize_duration from "humanize-duration";
const number = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];

const months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

export const utcDate = (date) => {
  const _date = new Date(date);
  return (
    (_date.getDate() < 10 ? number[_date.getDate()] : _date.getDate()) +
    " " +
    months[_date.getMonth()] +
    " " +
    _date.getFullYear()
  );
};
export const utcTime = (date) => {
  const _date = new Date(date);
  return (
    (_date.getHours() < 10 ? number[_date.getHours()] : _date.getHours()) +
    ":" +
    (_date.getMinutes() < 10 ? number[_date.getMinutes()] : _date.getMinutes())
  );
};
export const utcDateTime = (date) => {
  const _date = new Date(date);
  return (
    (_date.getDate() < 10 ? number[_date.getDate()] : _date.getDate()) +
    " " +
    months[_date.getMonth()] +
    " " +
    _date.getFullYear() +
    " " +
    (_date.getHours() < 10 ? number[_date.getHours()] : _date.getHours()) +
    ":" +
    (_date.getMinutes() < 10 ? number[_date.getMinutes()] : _date.getMinutes())
  );
};

export const TimeTravelling = (date = new Date()) => {
  const dayTime = 1000 * 60 * 60 * 24;
  let _now = new Date().getTime();
  let between_time = Math.abs(new Date(date).getTime() - _now);
  if (between_time <= dayTime) return "Bugün";
  else if (between_time > dayTime && 2 * dayTime > between_time) return "Dün";
  else return utcDate(date);
};
