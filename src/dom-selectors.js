import {
  setCurrentUnitDisplayed,
  displayWeatherData,
  currentData,
  displayTemp,
  displayWeatherForecast,
  currentForecastData,
  displayForecastTemp,
  getCurrentUnitDisplayed,
} from "./display-data";

export class DOMSelectors {
  constructor() {
    this._locationTitle = document.querySelector(".location-title");
    this._currentTemp = document.querySelector(".current-temp");
    this._submit = document.querySelector(".material-symbols-outlined");
    this._form = document.querySelector(".location-form");
    this._locationInput = document.querySelector("#location");
    this._convertButton = document.querySelector(".convert-unit");
    this._feelsLike = document.querySelector(".feels-like");
    this._main = document.querySelector(".main-value");
    this._description = document.querySelector(".description");
    this._humidity = document.querySelector(".humidity");
    this._windSpeed = document.querySelector(".wind-speed");
    this._lastUpdate = document.querySelector(".last-update");
    this._forecast = document.querySelector(".forecast-content");
    this._weatherIcon = document.querySelector(".weather-icon");

    this.initFormListener();
    this.initConvertButton();
  }

  /*   Location Title  */
  /*   --------------  */
  get locationTitle() {
    return this._locationTitle;
  }

  set locationTitle(title) {
    this._locationTitle = title;
  }

  /*    Current Temp   */
  /*   --------------  */
  get currentTemp() {
    return this._currentTemp;
  }

  set currentTemp(temp) {
    this._currentTemp = temp;
  }

  /*  Feels Like Temp  */
  /*   --------------  */
  get feelsLike() {
    return this._feelsLike;
  }

  set feelsLike(temp) {
    this._feelsLike = temp;
  }

  /*         Main      */
  /*   --------------  */
  get main() {
    return this._main;
  }

  set main(value) {
    this._main = value;
  }

  /*    Description    */
  /*   --------------  */
  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  /*      Humidity     */
  /*   --------------  */
  get humidity() {
    return this._humidity;
  }

  set humidity(value) {
    this._humidity = value;
  }

  /*     Wind Speed    */
  /*   --------------  */
  get windSpeed() {
    return this._windSpeed;
  }

  set windSpeed(value) {
    this._windSpeed = value;
  }

  /*    Last Update    */
  /*   --------------  */
  get lastUpdate() {
    return this._lastUpdate;
  }

  set lastUpdate(value) {
    this._lastUpdate = value;
  }

  /*      Forecast     */
  /*   --------------  */
  get forecast() {
    return this._forecast;
  }

  set forecast(value) {
    this._forecast = value;
  }

  /*    Weather Icon   */
  /*   --------------  */
  get weatherIcon() {
    return this._weatherIcon;
  }

  set weatherIcon(value) {
    this._weatherIcon = value;
  }

  /* ------ Event Listeners ------ */
  initFormListener() {
    this._submit.addEventListener("click", this.onFormSubmit.bind(this));
    this._form.addEventListener("submit", this.onFormSubmit.bind(this));
  }

  initConvertButton() {
    this._convertButton.addEventListener("click", () => {
      if (this._convertButton.textContent.includes("Convert to F")) {
        this._convertButton.textContent = "Convert to C";
        setCurrentUnitDisplayed("F");
        displayTemp(currentData.currentTemp, "F", "current");
        displayTemp(currentData.currentTemp, "F", "feels");

        for (let i = 0; i < currentForecastData.daysArray.length; i++) {
          displayForecastTemp(
            currentForecastData.daysArray[i].averageTemp,
            i,
            getCurrentUnitDisplayed()
          );
        }
      } else {
        this._convertButton.textContent = "Convert to F";
        setCurrentUnitDisplayed("C");
        displayTemp(currentData.currentTemp, "C", "current");
        displayTemp(currentData.currentTemp, "C", "feels");

        for (let i = 0; i < currentForecastData.daysArray.length; i++) {
          displayForecastTemp(
            currentForecastData.daysArray[i].averageTemp,
            i,
            getCurrentUnitDisplayed()
          );
        }
      }
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    let searchLocation = this._locationInput.value;
    displayWeatherData(searchLocation);
    displayWeatherForecast(searchLocation);
  }
}
