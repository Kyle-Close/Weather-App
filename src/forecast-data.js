export class Forecast {
  constructor(daysArray) {
    this.daysArray = daysArray;
  }
}

export class DayForecast {
  constructor(dayOfWeek, averageTemp, icon) {
    this.dayOfWeek = dayOfWeek;
    this.averageTemp = averageTemp;
    this.icon = icon;
  }
}
