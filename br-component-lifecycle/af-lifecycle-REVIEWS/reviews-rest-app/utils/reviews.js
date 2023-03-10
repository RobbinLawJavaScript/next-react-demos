const BASE_URL = 'http://localhost:5000'


export const getReviews = async () => {
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
    console.error (`Error of: ${error.message}`)
  } 
}

export const addNewReview = async ({title, comment, rating}) => {
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
    console.error (`Error of: ${error.message}`)
  } 
}

export const deleteReviewItem = async (id) => {
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
    console.error (`Error of: ${error.message}`)
  } 
}