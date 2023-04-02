const BASE_URL = "https://lldev.thespacedevs.com/2.2.0"

export const getAgencies = async () => {
	try {
	  const response = await fetch(`${BASE_URL}/agencies?featured=true`)
	  if (!response.ok) {
		throw new Error(`Bad status = ${response.status}`);
	   }
	  const data = await response.json()
		return data
	} 
	catch (error) {
	  console.error (`Error in getAgencies() fetch: ${error.message}`)
		throw(error)
	} 
}

export const getAgency = async (id) => {
	try {
	  const response = await fetch(`${BASE_URL}/agencies/${id}/`)
	  if (!response.ok) {
		throw new Error(`Bad status = ${response.status}`);
	   }
	  const data = await response.json()
	  return data
	} 
	catch (error) {
	  console.error (`Error in getAgency(id) fetch: ${error.message}`)
		throw(error)
	} 
}