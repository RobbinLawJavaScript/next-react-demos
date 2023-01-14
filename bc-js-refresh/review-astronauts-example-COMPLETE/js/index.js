import 'bootstrap/dist/css/bootstrap.min.css';

import { getAstronautList } from './api/astronaut.js';
import { renderAstronautListItem } from './dom/astronaut.js';

let astronautListElement = document.querySelector(".astronaut-list");

const runApp = async () => {
	try{
		let data = await getAstronautList();
		console.log(`All data =`);
		console.log(data);
		data.results.map((astronautData)=> {
			console.log(`astronautData = `);
			console.log(astronautData);
			renderAstronautListItem(astronautData, astronautListElement);
		});
	}
	catch (error) {
		console.error(error);
	}
}

runApp();