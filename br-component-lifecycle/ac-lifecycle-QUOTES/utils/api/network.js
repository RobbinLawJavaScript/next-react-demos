export const BASE_URL_WITH_END_POINT = 'https://api.quotable.io/random'

export const getRandomQuote = async () => {
  try {
    const response = await fetch(BASE_URL_WITH_END_POINT)
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
