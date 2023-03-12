export class WeatherData {
  constructor(
    location,
    currentTemp,
    feelsLike,
    main,
    description,
    humidity,
    windSpeed,
    lastUpdate,
    icon
  ) {
    this._location = location;
    this._currentTemp = currentTemp;
    this._feelsLike = feelsLike;
    this._main = main;
    this._description = description;
    this._humidity = humidity;
    this._windSpeed = windSpeed;
    this._lastUpdate = lastUpdate;
    this._icon = icon;
  }

  get location() {
    return this._location;
  }

  get currentTemp() {
    return this._currentTemp;
  }

  get feelsLike() {
    return this._feelsLike;
  }

  get main() {
    return this._main;
  }

  get description() {
    return this._description;
  }

  get humidity() {
    return this._humidity;
  }

  get windSpeed() {
    return this._windSpeed;
  }

  get lastUpdate() {
    return this._lastUpdate;
  }

  get icon() {
    return this._icon;
  }
}
