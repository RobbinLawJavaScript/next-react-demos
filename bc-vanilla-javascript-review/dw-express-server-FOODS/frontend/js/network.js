import {getData, postData, deleteData} from './http.js'

// how to search with json-server
// https://blog.eleven-labs.com/en/json-server/

export const getAllData = async () => {
  let url = `http://localhost:3000/items`
  const data = await getData(url)
  return data
}
// limit the search to 25 results
export const searchAllData = async (query) => {
  let url = `http://localhost:3000/items?q=${query}`
  const data = await getData(url)
  return data
}

export const getItemById = async (id) => {
  let url = `http://localhost:3000/items/${id}`
  const data = await getData(url)
  return data
}

export const getSavedItemByIdQuery = async (id) => {
  let url = `http://localhost:3000/saved-items/?q=${id}`
  const data = await getData(url)
  return data
}

export const saveFavoriteItem = async (item) => {
  let url = `http://localhost:3000/saved-items`
  const data = await postData(url, item)
  return data
}

export const deleteFavoriteItem = async (itemId) => {
  let url = `http://localhost:3000/saved-items`
  const data = await deleteData(url, itemId)
  return data
}

export const getFavoriteItems = async () => {
  let url = `http://localhost:3000/saved-items`
  const data = await getData(url)
  return data
}