import { DOMSelectors } from "./dom-selectors";
import { displayWeatherData } from "./display-data";

export let selectors = new DOMSelectors();

// Default location when the page loads.
displayWeatherData("Waterdown");

// Things to add to page
/* 
  - timezone (use this to get the dates... Im not sure this is the best way. The API  may have dates)
  

  **** If I wanna get crazy ****
  - wind -> deg (have an arrow that points in the wind direction based on deg on a compass)


*/
