import './styles.css';
import './components/pb-daterange-picker.js';
import './components/pb-bar-chart.js';
import './components/pb-timeline.js';
import './components/pb-brushing-layer.js';
import '@vaadin/vaadin-select';

import { LoadDataService } from "./services/load-data-service.js";
// import { ParseDateService } from "./services/parse-date-service.js";
// import { SearchResultService } from "./services/search-result-service.js";


let dataLoadingStatusEl;
let selectDataEl;

document.addEventListener("DOMContentLoaded", () => {
  dataLoadingStatusEl = document.getElementById("data-loading-status");
  selectDataEl = document.getElementById("select-data-dropdown");

  selectDataEl.addEventListener('change', function(event) {
    load(event.target.value);
  });
});

window.load = function(query) {
  new LoadDataService(query); // dispatches 'pb-timeline-data-loaded' event
  // HARDCODED LOADING (depricated)
  // let filepath = `https://dcts-todo-app.web.app/data/kba-${query}.json`; // for production on firebase deploy
  // let filepath = `http://localhost:8080/src/data/kba-${query}.json`;
}


// console.log(ParseDateService)
// console.log(new ParseDateService().run("2012"));
