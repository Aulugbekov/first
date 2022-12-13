var days = "thursday";

switch (days) {
  case "Sunday":
  case "SUNDAY":
  case "sunday":
    console.log("ВОСКРЕСЕНЬЕ");
    break;
  case "Monday":
  case "MONDAY":
  case "monday":
    console.log("ПОНЕДЕЛЬНИК");
    break;
  case "Tuesday":
  case "TUESDAY":
  case "tuesday":
    console.log("ВТОРНИК");
    break;
  case "Wednesday":
  case "WEDNESDAY":
  case "wednesday":
    console.log("СРЕДА");
    break;
  case "Thursday":
  case "THURSDAY":
  case "thursday":
    console.log("ЧЕТВЕРГ");
    break;
  case "Friday":
  case "FRIDAY":
  case "friday":
    console.log("ПЯТНИЦА");
    break;
  case "Saturday":
  case "SATURDAY":
  case "saturday":
    console.log("СУББОТА");
    break;
  default:
    console.log("Введите корректный день недели");
    break;
}

var serial = {
  serialName: "ИНТЕРНЫ",
  releaseDate: "31 марта 2010г.",
  mainActor:
    "Семён Семенович, Андрей Евгеньевич, Иван Купитман, Глеб Викторович, Варя Чернаус, Анастасия Кисегач, Полина Сергеевна.",
  episodes: "14 сезонов 280 серий",
  aboutSerial: {
    whatIsTheSerialAbout:
      "Сериал посвящён работе молодых неопытных интернов, постоянно попадающие в нелепые ситуации.",
    mainAutor:
      "Автором идеи является Вячаслав Дусмухаметов. За плечами у Вячаслава обучение в Челябинской государственной мед. академии",
    interestingFacts:
      "Кисегач - это не только фамилия главврача сериала, но и название одного из озёр Челябинской области",
  },
};

console.log(typeof serial);
console.log("Названия сериала - " + serial.serialName);
console.log("Дата выхода - " + serial.releaseDate);
console.log("Главные актеры - " + serial.mainActor);
console.log("Эпизоды сериала - " + serial.episodes);
console.log("О чем сериал - " + serial.aboutSerial.whatIsTheSerialAbout);
console.log("Главный автор идеи - " + serial.aboutSerial.mainAutor);
console.log("Интересные факты - " + serial.aboutSerial.interestingFacts);
