import { DOMSelectors } from "./dom-selectors";
import { displayWeatherData, displayWeatherForecast } from "./display-data";

export let selectors = new DOMSelectors();

const DEFAULTLOCATION = "Colwood";

// Default location when the page loads.
displayWeatherData(DEFAULTLOCATION);
displayWeatherForecast(DEFAULTLOCATION);
