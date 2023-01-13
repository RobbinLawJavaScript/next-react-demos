import 'bootstrap/dist/css/bootstrap.min.css';

import { getAstronautList } from './api/astronaut.js';
import { renderAstronautListItem } from './dom/astronaut.js';

let astronautListElem = document.querySelector(".astronaut-list");

getAstronautList()
.then((data)=>{
	console.log(data);
	data.results.map((astronautData)=> {
		renderAstronautListItem(astronautData, astronautListElem);
	});
});
