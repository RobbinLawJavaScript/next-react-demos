export const BASE_URL = "http://localhost:3000"

export const getItems  = async () => {
  const response = await fetch(`${BASE_URL}/api/items`);
  const data = await response.json();
  return data;
}

export const getItem = async (itemId) => {
  const response = await fetch(`${BASE_URL}/api/items/${itemId}`);
  const data = await response.json();
  return data;
}

export const getSavedItems = async () => {
  const response = await fetch(`${BASE_URL}/api/saved-items`);
  const data = await response.json();
  return data;
}

export const getSavedItemsDetail = async () => {
  const response = await fetch(`${BASE_URL}/api/saved-items-detail`);
  const data = await response.json();
  return data;
}

export const postSavedItem = async (itemId) => {
  const response = await fetch(`${BASE_URL}/api/saved-items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      { itemId: itemId }
    )
  })
  const data = await response.json();
  return data
}

export const deleteSavedItem = async (id) => {
  const response = await fetch(`${BASE_URL}/api/saved-items`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      { id: id }
    )
  })
  const data = await response.json();
  return data

}

export const getBoughtItems = async () => {
  const response = await fetch(`${BASE_URL}/api/bought-items`);
  const data = await response.json();
  return data;
}

export const getBoughtItemsDetail = async () => {
  const response = await fetch(`${BASE_URL}/api/bought-items-detail`);
  const data = await response.json();
  return data;
}

export const postBoughtItem = async (boughtItem) => {
  const response = await fetch(`${BASE_URL}/api/bought-items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(boughtItem)
  })
  const data = await response.json();
  return data
}

export const deleteBoughtItem = async (id) => {
  const response = await fetch(`${BASE_URL}/api/bought-items`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      { id: id }
    )
  })
  const data = await response.json();
  return data
}
