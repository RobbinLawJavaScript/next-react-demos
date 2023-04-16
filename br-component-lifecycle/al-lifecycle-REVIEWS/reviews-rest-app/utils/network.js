const BASE_URL = 'http://localhost:5000'


export const getItems = async () => {
  try {
    const response = await fetch(`${BASE_URL}/reviews/`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'       
      }
      })
    if (!response.ok) {
      throw new Error(`Bad status = ${response.status}`);
     }
    const data = await response.json()
    return data
  } 
  catch (error) {
    console.error (`catch getItems: ${error.message}`)
    throw(error)
  } 
}

export const addNewItem = async ({title, comment, rating}) => {
  try {
    const response = await fetch(`${BASE_URL}/reviews/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'       
      },
      body: JSON.stringify({
        title,
        comment,
        rating
      })
    })
    if (!response.ok) {
      throw new Error(`Bad status = ${response.status}`);
     }
    const data = await response.json()
    return data
  } 
  catch (error) {
    console.error (`catch addNewItem: ${error.message}`)
    throw(error)
  } 
}

export const deleteItem = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/reviews/${id}/`, {
      method: "DELETE"
      })
    if (!response.ok) {
      throw new Error(`Bad status = ${response.status}`);
     }
    const data = await response.json()
    return data
  } 
  catch (error) {
    console.error (`catch deleteItem: ${error.message}`)
    throw(error)
  } 
}