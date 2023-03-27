const BASE_URL = "https://lldev.thespacedevs.com/2.2.0"

export const getSpaceCraft = async () => {
	try {
	  const response = await fetch(`${BASE_URL}/spacecraft/${id}/`)
	  if (!response.ok) {
		throw new Error(`Bad status = ${response.status}`);
	   }
	  const data = await response.json()
	  return data
	} 
	catch (error) {
	  console.error (`Error of: ${error.message}`)
	} 
}