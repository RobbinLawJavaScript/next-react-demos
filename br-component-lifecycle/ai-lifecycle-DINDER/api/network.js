const BASE_URL = 'https://dog.ceo'

export const getData = async () => {
	try {
	  const response = await fetch(`${BASE_URL}/api/breeds/image/random`)
	  if (!response.ok) {
		throw new Error(`Bad status = ${response.status}`);
	   }
	  const data = await response.json()
		return data
	} 
	catch (error) {
	  console.error (`getData catch: ${error.message}`)
		throw(error)
	} 
}
