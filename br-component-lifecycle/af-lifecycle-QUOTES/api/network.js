const BASE_URL_WITH_END_POINT = 'http://api.quotable.io/random'

export const getRandomQuote = async () => {
  console.log(`getRandomQuote try begin`)
  try {
    const response = await fetch(BASE_URL_WITH_END_POINT)
    if (!response.ok) {
      throw new Error(`Bad response status = ${response.status}`);
     }
    const data = await response.json()
    console.log(`getRandomQuote try end`)
    return data
  } 
  catch (error) {
    console.error (`getRandomQuote catch: ${error.message}`)
    throw(error)
  } 
}
