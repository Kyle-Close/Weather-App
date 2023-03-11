import { DayForecast, Forecast } from "./forecast-data";
import { WeatherData } from "./weather-data";

// Returns a WeatherData object with all the data we are looking to display
export async function fetchWeatherData(searchLocation) {
  const key = "39419bc96b8d6bd02ae5517421b5c5b6";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&APPID=${key}`;
  let response;
  let data;

  try {
    response = await fetch(url);
  } catch (err) {
    console.log(err);
  }

  try {
    data = await response.json();
  } catch (err) {
    console.log(err);
  }

  // Extract data we are using
  const location = data.name;
  const currentTempKelvin = data.main.temp;
  const feelsLikeKelvin = data.main.feels_like;
  const main = data.weather[0].main;
  const description = data.weather[0].description;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const lastUpdate = formatLastUpdatedTime(data.dt);

  // Create a new WeatherData object to populate
  let weatherData = new WeatherData(
    location,
    currentTempKelvin,
    feelsLikeKelvin,
    main,
    description,
    humidity,
    windSpeed,
    lastUpdate
  );
  return weatherData;
}

export async function fetchWeatherForecast(searchLocation) {
  const key = "39419bc96b8d6bd02ae5517421b5c5b6";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchLocation}&appid=${key}`;
  let response;
  let data;

  try {
    response = await fetch(url);
  } catch (err) {
    console.log(err);
  }

  try {
    data = await response.json();
  } catch (err) {
    console.log(err);
  }

  // Sort the list of data by day of the week. Place each data obj into correct day
  let sorted = insertDayContainers(data.list);

  // Go through each day and get the data we need by averaging. Send it to an object
  let finalData = getFinalData(sorted);
  return finalData;
}

function getFinalData(sorted) {
  // Take object of days with data in each day
  // Iterate through each day and extract the data we need
  let daysArray = [];

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  for (const dayOfWeek of dayNames) {
    if (sorted[dayOfWeek].length !== 0) {
      let averageTemp = 0;
      let mostCommonWeatherId = getMostCommonWeatherId(sorted[dayOfWeek]);
      let icon = getIcon(mostCommonWeatherId);

      sorted[dayOfWeek].forEach((data) => {
        averageTemp += data.main.temp;
      });
      averageTemp = averageTemp / sorted[dayOfWeek].length;
      daysArray.push(new DayForecast(dayOfWeek, averageTemp, icon));
    }
  }

  let forecast = new Forecast(daysArray);
  return forecast;
}

function getIcon(id) {
  id = Number(id);
  let icon;
  if (id >= 200 && id < 300) {
    icon = "thunderstorm.png";
  } else if (id >= 300 && id < 400) {
    icon = "rainy.png";
  } else if (id >= 500 && id < 505) {
    icon = "sun-showers.png";
  } else if (id === 511) {
    icon = "snow.png"; // Supposed to be freezing rain
  } else if (id >= 505 && id < 600) {
    icon = "rainy.png";
  } else if (id >= 600 && id < 700) {
    icon = "snow.png";
  } else if (id >= 700 && id < 800) {
    icon = "mist.png";
  } else if (id === 800) {
    icon = "sun.png";
  } else if (id >= 800 && id < 803) {
    icon = "partial-cloudy.png";
  } else if (id > 802) {
    icon = "cloudy.png";
  }
  return icon;
}

function getMostCommonWeatherId(data) {
  let idArray = [];

  for (let i = 0; i < data.length; i++) {
    idArray.push(data[i].weather[0].id);
  }
  return findMostFrequentWord(idArray);
}

function findMostFrequentWord(words) {
  // Create a new Map to store word frequency
  const frequencyMap = new Map();

  // Iterate over each word in the array
  for (const word of words) {
    // If the word is already in the frequency map, increment its count
    if (frequencyMap.has(word)) {
      frequencyMap.set(word, frequencyMap.get(word) + 1);
    } else {
      // Otherwise, add the word to the frequency map with a count of 1
      frequencyMap.set(word, 1);
    }
  }

  // Find the word with the highest frequency
  let mostFrequentWord = words[0];
  let highestFrequency = 1;

  for (const [word, frequency] of frequencyMap.entries()) {
    if (frequency > highestFrequency) {
      mostFrequentWord = word;
      highestFrequency = frequency;
    }
  }

  return mostFrequentWord;
}

function insertDayContainers(list) {
  // Get current day. We want to start on next day
  const date = new Date();
  const today = date.getDay(); // 5 for Friday

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayContainers = {
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  };

  list.forEach((data) => {
    const dt = new Date(data.dt * 1000);
    const forecastDay = dt.getDay();

    if (forecastDay !== today) {
      // Group them based on day
      const dayName = dayNames[forecastDay];
      dayContainers[dayName].push(data);
    }
  });

  return dayContainers;
}

function formatLastUpdatedTime(timestamp) {
  const date = new Date(timestamp * 1000);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const monthOfYear = monthsOfYear[date.getMonth()];
  const year = date.getFullYear().toString().substr(-2);
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const amPm = hours >= 12 ? "pm" : "am";
  const formattedTime = `${dayOfWeek}, ${dayOfMonth}${getDaySuffix(
    dayOfMonth
  )} ${monthOfYear} '${year} ${formatHour(hours)}:${minutes} ${amPm}`;
  return formattedTime;
}

function getDaySuffix(dayOfMonth) {
  switch (dayOfMonth) {
    case 1:
    case 21:
    case 31:
      return "st";
    case 2:
    case 22:
      return "nd";
    case 3:
    case 23:
      return "rd";
    default:
      return "th";
  }
}

function formatHour(hours) {
  const twelveHourFormat = hours % 12 || 12;
  return twelveHourFormat.toString().padStart(2, "0");
}
