const COMPLETE_URL = "https://lldev.thespacedevs.com/2.2.0/astronaut/";
//const COMPLETE_URL = "https://badurl.com";
//const COMPLETE_URL = "https://lldev.thespacedevs.com/2.2.0/badendpoint/";

const getAstronautList = async () => {
	console.log('BEGIN getAstronautList');
	// fetch() returns a promise to res.
	// The await keyword "stalls" the JS assignment
	// until the data or error is returned (promise resolves or is rejected). 
	const res = await fetch(COMPLETE_URL);
	console.log(res);
	if (!res.ok) {
		throw new Error(`Bad status = ${res.status}`);
	 }
	// res.json() also returns a promise to data.
	const data = await res.json();
	console.log('END getAstronautList');
	return data;
}

export { getAstronautList }