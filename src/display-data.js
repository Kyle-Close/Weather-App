import { selectors } from ".";
import { fetchWeatherData, fetchWeatherForecast } from "./request-handler";

export let currentData;
export let currentForecastData;
let currentUnitDisplayed = "C"; // Defaults to Cel

export function setCurrentUnitDisplayed(value) {
  currentUnitDisplayed = value;
}

export function getCurrentUnitDisplayed() {
  return currentUnitDisplayed;
}

export async function displayWeatherData(location) {
  try {
    currentData = await fetchWeatherData(location);

    displayLocation(currentData.location);
    displayTemp(currentData.currentTemp, currentUnitDisplayed, "current");
    displayTemp(currentData.feelsLike, currentUnitDisplayed, "feels");
    displayDescription(currentData.description);
    displayHumidity(currentData.humidity);
    displayWindSpeed(currentData.windSpeed);
    displayLastUpdate(currentData.lastUpdate);
    displayIcon(currentData.icon);
  } catch (err) {
    alert("Location not found!");
  }
}

export async function displayWeatherForecast(location) {
  try {
    currentForecastData = await fetchWeatherForecast(location);
    let daysArray = currentForecastData["daysArray"];

    for (let i = 0; i < daysArray.length; i++) {
      displayForecastDay(daysArray[i].dayOfWeek, i); // Displays "Monday" for example
      displayForecastTemp(daysArray[i].averageTemp, i, currentUnitDisplayed); // Displays average temp for that day
      displayForecastIcon(daysArray[i].icon, i); // Displays the icon which is the most common weather code icon
    }
  } catch (err) {
    console.log(err);
  }
}

function displayIcon(icon) {
  selectors._weatherIcon.src = `./img/${icon}`;
}

function displayForecastIcon(icon, index) {
  selectors._forecast.children[index].children[1].src = `./img/${icon}`;
}

export function displayForecastTemp(temp, index, unit) {
  if (unit === "C") {
    temp = convertKelvinToC(temp) + "\u00B0";
  } else {
    temp = convertKelvinToF(temp) + "\u00B0";
  }
  selectors._forecast.children[index].children[2].textContent = temp;
}

function displayForecastDay(dayOfWeek, index) {
  selectors._forecast.children[index].children[0].textContent = dayOfWeek;
}

export function displayLocation(location) {
  selectors.locationTitle.textContent = location;
}

export function displayTemp(temp, unit, type) {
  if (unit === "C") {
    temp = convertKelvinToC(temp) + "\u00B0";
  } else {
    temp = convertKelvinToF(temp) + "\u00B0";
  }
  if (type === "current") {
    selectors.currentTemp.textContent = temp;
  } else if (type === "feels") {
    selectors.feelsLike.textContent = `Feels Like: ${temp}`;
  }
}

function displayDescription(description) {
  const words = description.split(" ");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const capitalizedStr = capitalizedWords.join(" ");
  selectors.description.textContent = capitalizedStr;
}

function displayHumidity(humidity) {
  selectors.humidity.textContent = `Humidity: ${humidity}%`;
}

function displayWindSpeed(windSpeed) {
  windSpeed = (windSpeed * 3.6).toFixed(2); // Convert to kph then round to 2 decimals
  selectors.windSpeed.textContent = `Wind Speed: ${windSpeed} kph`;
}

function displayLastUpdate(lastUpdate) {
  selectors.lastUpdate.innerHTML = lastUpdate;
}

/* ------- HELPERS ------- */
function convertKelvinToC(kelvinTemp) {
  let result = kelvinTemp - 273.15;
  // Round to 2 decimals
  result = Math.round(result);
  return result;
}

function convertKelvinToF(kelvinTemp) {
  let result = 1.8 * (kelvinTemp - 273) + 32;
  // Round to 2 decimals
  result = Math.round(result);
  return result;
}
