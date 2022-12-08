var day = Number(prompt("введите дату рождения"));
var month = prompt("Введите месяц рождения");
if ((day <= 23 && month === "сентябрь") || (day <= 16 && month === "октябрь")) {
  console.log("В Е С Ы");
} else if (
  (day >= 23 && day <= 31 && month === "октябрь") ||
  (day <= 21 && month === "ноябрь")
) {
  console.log("С К О Р П И О Н");
} else if (
  (day >= 21 && day <= 31 && month === "март") ||
  (day <= 19 && month === "апрель")
) {
  console.log("О В Е Н");
} else if (
  (day >= 21 && day <= 31 && month === "апрель") ||
  (day <= 20 && month === "май")
) {
  console.log("Т Е Л Е Ц");
} else if (
  (day >= 21 && day <= 31 && month === "май") ||
  (day <= 20 && month === "июнь")
) {
  console.log("Б Л И З Н Е Ц Ы");
} else if (
  (day >= 21 && day <= 31 && month === "июнь") ||
  (day <= 22 && month === "июль")
) {
  console.log("Р А К");
} else if (
  (day >= 23 && day <= 31 && month === "июль") ||
  (day <= 21 && month === "август")
) {
  console.log("Л Е В");
} else if (
  (day >= 23 && day <= 31 && month === "август") ||
  (day <= 22 && month === "сентябрь")
) {
  console.log("Д Е В А");
} else if (
  (day >= 22 && day <= 31 && month === "ноябрь") ||
  (day <= 21 && month === "декабрь")
) {
  console.log("С Т Р Е Л Е Ц");
} else if (
  (day >= 22 && day <= 31 && month === "декабрь") ||
  (day <= 19 && month === "январь")
) {
  console.log("К О З Е Р О Г");
} else if (
  (day = 20 && day <= 31 && month === "январь") ||
  (day <= 18 && month === "февраль")
) {
  console.log("В О Д О Л Е Й");
} else if (
  (day >= 19 && day <= 31 && month === "февраль") ||
  (day <= 21 && month === "март")
) {
  console.log("Р Ы Б Ы");
} else {
  console.log("Пожалуйста введите КОРРЕКТНЫЕ данные");
}
