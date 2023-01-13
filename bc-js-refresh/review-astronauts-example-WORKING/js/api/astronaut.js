const BASE_URL = "https://lldev.thespacedevs.com/2.2.0";

const getAstronautList1 = () => {
	return fetch(`${BASE_URL}/astronaut/`)
	  .then((response)=> {
		  return response.json();
	  })
		.then((data)=> {
		  return data;
	  });
}

const getAstronautList = async () => {
	// fetch() returns a promise to res.
	// The await keyword "stalls" the JS assignment
	// until the data or error is returned (promise resolves or is rejected). 
	const res = await fetch(`${BASE_URL}/astronaut/`);
	if (!res.ok) {
		throw new Error('OPPS');
	 }
	// res.json() also returns a promise to data.
	const data = await res.json();
	return data;
}

export { getAstronautList }