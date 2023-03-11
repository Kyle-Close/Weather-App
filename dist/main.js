/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display-data.js":
/*!*****************************!*\
  !*** ./src/display-data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currentData\": () => (/* binding */ currentData),\n/* harmony export */   \"currentForecastData\": () => (/* binding */ currentForecastData),\n/* harmony export */   \"displayForecastTemp\": () => (/* binding */ displayForecastTemp),\n/* harmony export */   \"displayLocation\": () => (/* binding */ displayLocation),\n/* harmony export */   \"displayTemp\": () => (/* binding */ displayTemp),\n/* harmony export */   \"displayWeatherData\": () => (/* binding */ displayWeatherData),\n/* harmony export */   \"displayWeatherForecast\": () => (/* binding */ displayWeatherForecast),\n/* harmony export */   \"getCurrentUnitDisplayed\": () => (/* binding */ getCurrentUnitDisplayed),\n/* harmony export */   \"setCurrentUnitDisplayed\": () => (/* binding */ setCurrentUnitDisplayed)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _request_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-handler */ \"./src/request-handler.js\");\n\n\n\nlet currentData;\nlet currentForecastData;\nlet currentUnitDisplayed = \"C\"; // Defaults to Cel\n\nfunction setCurrentUnitDisplayed(value) {\n  currentUnitDisplayed = value;\n}\n\nfunction getCurrentUnitDisplayed() {\n  return currentUnitDisplayed;\n}\n\nasync function displayWeatherData(location) {\n  currentData = await (0,_request_handler__WEBPACK_IMPORTED_MODULE_1__.fetchWeatherData)(location);\n\n  displayLocation(currentData.location);\n  displayTemp(currentData.currentTemp, currentUnitDisplayed, \"current\");\n  displayTemp(currentData.feelsLike, currentUnitDisplayed, \"feels\");\n  displayMain(currentData.main);\n  displayDescription(currentData.description);\n  displayHumidity(currentData.humidity);\n  displayWindSpeed(currentData.windSpeed);\n  displayLastUpdate(currentData.lastUpdate);\n}\n\nasync function displayWeatherForecast(location) {\n  currentForecastData = await (0,_request_handler__WEBPACK_IMPORTED_MODULE_1__.fetchWeatherForecast)(location);\n  let daysArray = currentForecastData[\"daysArray\"];\n\n  for (let i = 0; i < daysArray.length; i++) {\n    displayForecastDay(daysArray[i].dayOfWeek, i); // Displays \"Monday\" for example\n    displayForecastTemp(daysArray[i].averageTemp, i, currentUnitDisplayed); // Displays average temp for that day\n    displayForecastIcon(daysArray[i].icon, i); // Displays the icon which is the most common weather code icon\n  }\n}\n\nfunction displayForecastIcon(icon, index) {\n  ___WEBPACK_IMPORTED_MODULE_0__.selectors._forecast.children[index].children[2].src = `./img/${icon}`;\n}\n\nfunction displayForecastTemp(temp, index, unit) {\n  if (unit === \"C\") {\n    temp = convertKelvinToC(temp) + \" C\";\n  } else {\n    temp = convertKelvinToF(temp) + \" F\";\n  }\n  ___WEBPACK_IMPORTED_MODULE_0__.selectors._forecast.children[index].children[1].textContent = temp;\n}\n\nfunction displayForecastDay(dayOfWeek, index) {\n  ___WEBPACK_IMPORTED_MODULE_0__.selectors._forecast.children[index].children[0].textContent = dayOfWeek;\n}\n\nfunction displayLocation(location) {\n  ___WEBPACK_IMPORTED_MODULE_0__.selectors.locationTitle.textContent = location;\n}\n\nfunction displayTemp(temp, unit, type) {\n  if (unit === \"C\") {\n    temp = convertKelvinToC(temp) + \" C\";\n  } else {\n    temp = convertKelvinToF(temp) + \" F\";\n  }\n  if (type === \"current\") {\n    ___WEBPACK_IMPORTED_MODULE_0__.selectors.currentTemp.textContent = `Current Temp: ${temp}`;\n  } else if (type === \"feels\") {\n    ___WEBPACK_IMPORTED_MODULE_0__.selectors.feelsLike.textContent = `Feels Like: ${temp}`;\n  }\n}\n\nfunction displayMain(value) {\n  ___WEBPACK_IMPORTED_MODULE_0__.selectors.main.textContent = value;\n}\n\nfunction displayDescription(description) {\n  ___WEBPACK_IMPORTED_MODULE_0__.selectors.description.textContent = description;\n}\n\nfunction displayHumidity(humidity) {\n  ___WEBPACK_IMPORTED_MODULE_0__.selectors.humidity.textContent = `Humidity: ${humidity}%`;\n}\n\nfunction displayWindSpeed(windSpeed) {\n  windSpeed = (windSpeed * 3.6).toFixed(2); // Convert to kph then round to 2 decimals\n  ___WEBPACK_IMPORTED_MODULE_0__.selectors.windSpeed.textContent = `Wind Speed: ${windSpeed} kph`;\n}\n\nfunction displayLastUpdate(lastUpdate) {\n  ___WEBPACK_IMPORTED_MODULE_0__.selectors.lastUpdate.textContent = `Last Updated: ${lastUpdate}`;\n}\n\n/* ------- HELPERS ------- */\nfunction convertKelvinToC(kelvinTemp) {\n  let result = kelvinTemp - 273.15;\n  // Round to 2 decimals\n  result = Math.round(result);\n  return result;\n}\n\nfunction convertKelvinToF(kelvinTemp) {\n  let result = 1.8 * (kelvinTemp - 273) + 32;\n  // Round to 2 decimals\n  result = Math.round(result);\n  return result;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/display-data.js?");

/***/ }),

/***/ "./src/dom-selectors.js":
/*!******************************!*\
  !*** ./src/dom-selectors.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMSelectors\": () => (/* binding */ DOMSelectors)\n/* harmony export */ });\n/* harmony import */ var _display_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-data */ \"./src/display-data.js\");\n\n\nclass DOMSelectors {\n  constructor() {\n    this._locationTitle = document.querySelector(\".location-title\");\n    this._currentTemp = document.querySelector(\".current-temp\");\n    this._form = document.querySelector(\".location-form\");\n    this._locationInput = document.querySelector(\"#location\");\n    this._convertButton = document.querySelector(\".convert-unit\");\n    this._feelsLike = document.querySelector(\".feels-like\");\n    this._main = document.querySelector(\".main-value\");\n    this._description = document.querySelector(\".description\");\n    this._humidity = document.querySelector(\".humidity\");\n    this._windSpeed = document.querySelector(\".wind-speed\");\n    this._lastUpdate = document.querySelector(\".last-update\");\n    this._forecast = document.querySelector(\".forecast\");\n\n    this.initFormListener();\n    this.initConvertButton();\n  }\n\n  /*   Location Title  */\n  /*   --------------  */\n  get locationTitle() {\n    return this._locationTitle;\n  }\n\n  set locationTitle(title) {\n    this._locationTitle = title;\n  }\n\n  /*    Current Temp   */\n  /*   --------------  */\n  get currentTemp() {\n    return this._currentTemp;\n  }\n\n  set currentTemp(temp) {\n    this._currentTemp = temp;\n  }\n\n  /*  Feels Like Temp  */\n  /*   --------------  */\n  get feelsLike() {\n    return this._feelsLike;\n  }\n\n  set feelsLike(temp) {\n    this._feelsLike = temp;\n  }\n\n  /*         Main      */\n  /*   --------------  */\n  get main() {\n    return this._main;\n  }\n\n  set main(value) {\n    this._main = value;\n  }\n\n  /*    Description    */\n  /*   --------------  */\n  get description() {\n    return this._description;\n  }\n\n  set description(value) {\n    this._description = value;\n  }\n\n  /*      Humidity     */\n  /*   --------------  */\n  get humidity() {\n    return this._humidity;\n  }\n\n  set humidity(value) {\n    this._humidity = value;\n  }\n\n  /*     Wind Speed    */\n  /*   --------------  */\n  get windSpeed() {\n    return this._windSpeed;\n  }\n\n  set windSpeed(value) {\n    this._windSpeed = value;\n  }\n\n  /*    Last Update    */\n  /*   --------------  */\n  get lastUpdate() {\n    return this._lastUpdate;\n  }\n\n  set lastUpdate(value) {\n    this._lastUpdate = value;\n  }\n\n  /*      Forecast     */\n  /*   --------------  */\n  get forecast() {\n    return this._forecast;\n  }\n\n  set forecast(value) {\n    this._forecast = value;\n  }\n\n  /* ------ Event Listeners ------ */\n  initFormListener() {\n    this._form.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n      let searchLocation = this._locationInput.value;\n      (0,_display_data__WEBPACK_IMPORTED_MODULE_0__.displayWeatherData)(searchLocation);\n      (0,_display_data__WEBPACK_IMPORTED_MODULE_0__.displayWeatherForecast)(searchLocation);\n    });\n  }\n\n  initConvertButton() {\n    this._convertButton.addEventListener(\"click\", () => {\n      if (this._convertButton.textContent === \"Convert to F\") {\n        this._convertButton.textContent = \"Convert to C\";\n        (0,_display_data__WEBPACK_IMPORTED_MODULE_0__.setCurrentUnitDisplayed)(\"F\");\n        (0,_display_data__WEBPACK_IMPORTED_MODULE_0__.displayTemp)(_display_data__WEBPACK_IMPORTED_MODULE_0__.currentData.currentTemp, \"F\", \"current\");\n        (0,_display_data__WEBPACK_IMPORTED_MODULE_0__.displayTemp)(_display_data__WEBPACK_IMPORTED_MODULE_0__.currentData.currentTemp, \"F\", \"feels\");\n\n        for (let i = 0; i < _display_data__WEBPACK_IMPORTED_MODULE_0__.currentForecastData.daysArray.length; i++) {\n          (0,_display_data__WEBPACK_IMPORTED_MODULE_0__.displayForecastTemp)(\n            _display_data__WEBPACK_IMPORTED_MODULE_0__.currentForecastData.daysArray[i].averageTemp,\n            i,\n            (0,_display_data__WEBPACK_IMPORTED_MODULE_0__.getCurrentUnitDisplayed)()\n          );\n        }\n      } else {\n        this._convertButton.textContent = \"Convert to F\";\n        (0,_display_data__WEBPACK_IMPORTED_MODULE_0__.setCurrentUnitDisplayed)(\"C\");\n        (0,_display_data__WEBPACK_IMPORTED_MODULE_0__.displayTemp)(_display_data__WEBPACK_IMPORTED_MODULE_0__.currentData.currentTemp, \"C\", \"current\");\n        (0,_display_data__WEBPACK_IMPORTED_MODULE_0__.displayTemp)(_display_data__WEBPACK_IMPORTED_MODULE_0__.currentData.currentTemp, \"C\", \"feels\");\n\n        for (let i = 0; i < _display_data__WEBPACK_IMPORTED_MODULE_0__.currentForecastData.daysArray.length; i++) {\n          (0,_display_data__WEBPACK_IMPORTED_MODULE_0__.displayForecastTemp)(\n            _display_data__WEBPACK_IMPORTED_MODULE_0__.currentForecastData.daysArray[i].averageTemp,\n            i,\n            (0,_display_data__WEBPACK_IMPORTED_MODULE_0__.getCurrentUnitDisplayed)()\n          );\n        }\n      }\n    });\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/dom-selectors.js?");

/***/ }),

/***/ "./src/forecast-data.js":
/*!******************************!*\
  !*** ./src/forecast-data.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DayForecast\": () => (/* binding */ DayForecast),\n/* harmony export */   \"Forecast\": () => (/* binding */ Forecast)\n/* harmony export */ });\nclass Forecast {\n  constructor(daysArray) {\n    this.daysArray = daysArray;\n  }\n}\n\nclass DayForecast {\n  constructor(dayOfWeek, averageTemp, icon) {\n    this.dayOfWeek = dayOfWeek;\n    this.averageTemp = averageTemp;\n    this.icon = icon;\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/forecast-data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectors\": () => (/* binding */ selectors)\n/* harmony export */ });\n/* harmony import */ var _dom_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-selectors */ \"./src/dom-selectors.js\");\n/* harmony import */ var _display_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-data */ \"./src/display-data.js\");\n\n\n\nlet selectors = new _dom_selectors__WEBPACK_IMPORTED_MODULE_0__.DOMSelectors();\n\n// Default location when the page loads.\n(0,_display_data__WEBPACK_IMPORTED_MODULE_1__.displayWeatherData)(\"Waterdown\");\n(0,_display_data__WEBPACK_IMPORTED_MODULE_1__.displayWeatherForecast)(\"Waterdown\");\n\n// Things to add to page\n/* \n  - timezone (use this to get the dates... Im not sure this is the best way. The API  may have dates)\n  \n\n  **** If I wanna get crazy ****\n  - wind -> deg (have an arrow that points in the wind direction based on deg on a compass)\n\n\n*/\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/request-handler.js":
/*!********************************!*\
  !*** ./src/request-handler.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchWeatherData\": () => (/* binding */ fetchWeatherData),\n/* harmony export */   \"fetchWeatherForecast\": () => (/* binding */ fetchWeatherForecast)\n/* harmony export */ });\n/* harmony import */ var _forecast_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecast-data */ \"./src/forecast-data.js\");\n/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-data */ \"./src/weather-data.js\");\n\n\n\n// Returns a WeatherData object with all the data we are looking to display\nasync function fetchWeatherData(searchLocation) {\n  const key = \"39419bc96b8d6bd02ae5517421b5c5b6\";\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&APPID=${key}`;\n  let response;\n  let data;\n\n  try {\n    response = await fetch(url);\n  } catch (err) {\n    console.log(err);\n  }\n\n  try {\n    data = await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n\n  // Extract data we are using\n  const location = data.name;\n  const currentTempKelvin = data.main.temp;\n  const feelsLikeKelvin = data.main.feels_like;\n  const main = data.weather[0].main;\n  const description = data.weather[0].description;\n  const humidity = data.main.humidity;\n  const windSpeed = data.wind.speed;\n  const lastUpdate = formatLastUpdatedTime(data.dt);\n\n  // Create a new WeatherData object to populate\n  let weatherData = new _weather_data__WEBPACK_IMPORTED_MODULE_1__.WeatherData(\n    location,\n    currentTempKelvin,\n    feelsLikeKelvin,\n    main,\n    description,\n    humidity,\n    windSpeed,\n    lastUpdate\n  );\n  return weatherData;\n}\n\nasync function fetchWeatherForecast(searchLocation) {\n  const key = \"39419bc96b8d6bd02ae5517421b5c5b6\";\n  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchLocation}&appid=${key}`;\n  let response;\n  let data;\n\n  try {\n    response = await fetch(url);\n  } catch (err) {\n    console.log(err);\n  }\n\n  try {\n    data = await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n\n  // Sort the list of data by day of the week. Place each data obj into correct day\n  let sorted = insertDayContainers(data.list);\n\n  // Go through each day and get the data we need by averaging. Send it to an object\n  let finalData = getFinalData(sorted);\n  return finalData;\n}\n\nfunction getFinalData(sorted) {\n  // Take object of days with data in each day\n  // Iterate through each day and extract the data we need\n  let daysArray = [];\n\n  const dayNames = [\n    \"Sunday\",\n    \"Monday\",\n    \"Tuesday\",\n    \"Wednesday\",\n    \"Thursday\",\n    \"Friday\",\n    \"Saturday\",\n  ];\n\n  for (const dayOfWeek of dayNames) {\n    if (sorted[dayOfWeek].length !== 0) {\n      let averageTemp = 0;\n      let mostCommonWeatherId = getMostCommonWeatherId(sorted[dayOfWeek]);\n      let icon = getIcon(mostCommonWeatherId);\n\n      sorted[dayOfWeek].forEach((data) => {\n        averageTemp += data.main.temp;\n      });\n      averageTemp = averageTemp / sorted[dayOfWeek].length;\n      daysArray.push(new _forecast_data__WEBPACK_IMPORTED_MODULE_0__.DayForecast(dayOfWeek, averageTemp, icon));\n    }\n  }\n\n  let forecast = new _forecast_data__WEBPACK_IMPORTED_MODULE_0__.Forecast(daysArray);\n  return forecast;\n}\n\nfunction getIcon(id) {\n  id = Number(id);\n  let icon;\n  if (id >= 200 && id < 300) {\n    icon = \"thunderstorm.png\";\n  } else if (id >= 300 && id < 400) {\n    icon = \"rainy.png\";\n  } else if (id >= 500 && id < 505) {\n    icon = \"sun-showers.png\";\n  } else if (id === 511) {\n    icon = \"snow.png\"; // Supposed to be freezing rain\n  } else if (id >= 505 && id < 600) {\n    icon = \"rainy.png\";\n  } else if (id >= 600 && id < 700) {\n    icon = \"snow.png\";\n  } else if (id >= 700 && id < 800) {\n    icon = \"mist.png\";\n  } else if (id === 800) {\n    icon = \"sun.png\";\n  } else if (id >= 800 && id < 803) {\n    icon = \"partial-cloudy.png\";\n  } else if (id > 802) {\n    icon = \"cloudy.png\";\n  }\n  return icon;\n}\n\nfunction getMostCommonWeatherId(data) {\n  let idArray = [];\n\n  for (let i = 0; i < data.length; i++) {\n    idArray.push(data[i].weather[0].id);\n  }\n  return findMostFrequentWord(idArray);\n}\n\nfunction findMostFrequentWord(words) {\n  // Create a new Map to store word frequency\n  const frequencyMap = new Map();\n\n  // Iterate over each word in the array\n  for (const word of words) {\n    // If the word is already in the frequency map, increment its count\n    if (frequencyMap.has(word)) {\n      frequencyMap.set(word, frequencyMap.get(word) + 1);\n    } else {\n      // Otherwise, add the word to the frequency map with a count of 1\n      frequencyMap.set(word, 1);\n    }\n  }\n\n  // Find the word with the highest frequency\n  let mostFrequentWord = words[0];\n  let highestFrequency = 1;\n\n  for (const [word, frequency] of frequencyMap.entries()) {\n    if (frequency > highestFrequency) {\n      mostFrequentWord = word;\n      highestFrequency = frequency;\n    }\n  }\n\n  return mostFrequentWord;\n}\n\nfunction insertDayContainers(list) {\n  // Get current day. We want to start on next day\n  const date = new Date();\n  const today = date.getDay(); // 5 for Friday\n\n  const dayNames = [\n    \"Sunday\",\n    \"Monday\",\n    \"Tuesday\",\n    \"Wednesday\",\n    \"Thursday\",\n    \"Friday\",\n    \"Saturday\",\n  ];\n  const dayContainers = {\n    Sunday: [],\n    Monday: [],\n    Tuesday: [],\n    Wednesday: [],\n    Thursday: [],\n    Friday: [],\n    Saturday: [],\n  };\n\n  list.forEach((data) => {\n    const dt = new Date(data.dt * 1000);\n    const forecastDay = dt.getDay();\n\n    if (forecastDay !== today) {\n      // Group them based on day\n      const dayName = dayNames[forecastDay];\n      dayContainers[dayName].push(data);\n    }\n  });\n\n  return dayContainers;\n}\n\nfunction formatLastUpdatedTime(timestamp) {\n  const date = new Date(timestamp * 1000);\n  const daysOfWeek = [\n    \"Sunday\",\n    \"Monday\",\n    \"Tuesday\",\n    \"Wednesday\",\n    \"Thursday\",\n    \"Friday\",\n    \"Saturday\",\n  ];\n  const monthsOfYear = [\n    \"January\",\n    \"February\",\n    \"March\",\n    \"April\",\n    \"May\",\n    \"June\",\n    \"July\",\n    \"August\",\n    \"September\",\n    \"October\",\n    \"November\",\n    \"December\",\n  ];\n  const dayOfWeek = daysOfWeek[date.getDay()];\n  const dayOfMonth = date.getDate();\n  const monthOfYear = monthsOfYear[date.getMonth()];\n  const year = date.getFullYear().toString().substr(-2);\n  const hours = date.getHours();\n  const minutes = date.getMinutes().toString().padStart(2, \"0\");\n  const amPm = hours >= 12 ? \"pm\" : \"am\";\n  const formattedTime = `${dayOfWeek}, ${dayOfMonth}${getDaySuffix(\n    dayOfMonth\n  )} ${monthOfYear} '${year} ${formatHour(hours)}:${minutes} ${amPm}`;\n  return formattedTime;\n}\n\nfunction getDaySuffix(dayOfMonth) {\n  switch (dayOfMonth) {\n    case 1:\n    case 21:\n    case 31:\n      return \"st\";\n    case 2:\n    case 22:\n      return \"nd\";\n    case 3:\n    case 23:\n      return \"rd\";\n    default:\n      return \"th\";\n  }\n}\n\nfunction formatHour(hours) {\n  const twelveHourFormat = hours % 12 || 12;\n  return twelveHourFormat.toString().padStart(2, \"0\");\n}\n\n\n//# sourceURL=webpack://weather-app/./src/request-handler.js?");

/***/ }),

/***/ "./src/weather-data.js":
/*!*****************************!*\
  !*** ./src/weather-data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WeatherData\": () => (/* binding */ WeatherData)\n/* harmony export */ });\nclass WeatherData {\n  constructor(\n    location,\n    currentTemp,\n    feelsLike,\n    main,\n    description,\n    humidity,\n    windSpeed,\n    lastUpdate\n  ) {\n    this._location = location;\n    this._currentTemp = currentTemp;\n    this._feelsLike = feelsLike;\n    this._main = main;\n    this._description = description;\n    this._humidity = humidity;\n    this._windSpeed = windSpeed;\n    this._lastUpdate = lastUpdate;\n  }\n\n  get location() {\n    return this._location;\n  }\n\n  get currentTemp() {\n    return this._currentTemp;\n  }\n\n  get feelsLike() {\n    return this._feelsLike;\n  }\n\n  get main() {\n    return this._main;\n  }\n\n  get description() {\n    return this._description;\n  }\n\n  get humidity() {\n    return this._humidity;\n  }\n\n  get windSpeed() {\n    return this._windSpeed;\n  }\n\n  get lastUpdate() {\n    return this._lastUpdate;\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/weather-data.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;