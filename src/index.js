import { DOMSelectors } from "./dom-selectors";
import { displayWeatherData } from "./display-data";

export let selectors = new DOMSelectors();

// Default location when the page loads.
displayWeatherData("Waterdown");
