import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/cover.css'
import '../css/main.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { 
  getAllData,
  searchAllData,
  getItemById,
  getSavedItemByIdQuery,
  saveFavoriteItem,
  deleteFavoriteItem,
  getFavoriteItems,
} from './network.js'
import { renderData, showAlert } from './ui.js'

let tabNavigator = document.querySelector("#tab-navigation")
let searchedTab = document.querySelector("#searched-tab")
let favoritesTab = document.querySelector("#favorites-tab")

let form = document.querySelector("#form")
let searchedList = document.querySelector("#searched-list")
let favoritesList = document.querySelector("#favorites-list")

let allDataArray = []
let searchedArray = []
let favoritesArray = []
let savedItemsDetailsArray = []


// part 1: tab navigation
tabNavigator.addEventListener("click", async (e)=> {
  let tabName = e.target.textContent
  let searched = tabNavigator.children[0].firstElementChild
  let favorites = tabNavigator.children[1].firstElementChild
  console.clear()
  console.log(`searched=`)
  console.log(searched)
  console.log(`favorites=`)
  console.log(favorites)
  if (tabName === "Search Foods") {
    searched.classList.add("active")
    favorites.classList.remove("active")
    searchedTab.classList.remove("d-none")
    favoritesTab.classList.add("d-none")
  } else if (tabName === "Favorite Foods") {
    searched.classList.remove("active")
    favorites.classList.add("active")
    searchedTab.classList.add("d-none")
    favoritesTab.classList.remove("d-none")
    await createSavedItemsDetailsArray()
    console.log('Saved Items Details Array')
    console.log(savedItemsDetailsArray)
    renderData('favorites', savedItemsDetailsArray, favoritesList)
  }
})

const createSavedItemsDetailsArray = async () => {
  console.log('START createSavedItemsDetailsArray')
  while (savedItemsDetailsArray.length > 0) {
    savedItemsDetailsArray.pop();
  }
  while (favoritesArray.length > 0) {
    favoritesArray.pop();
  }
  allDataArray = await getAllData()
  console.log('allDataArray')
  console.log(allDataArray)
  favoritesArray = await getFavoriteItems()
  console.log('favorites Array')
  console.log(favoritesArray)
  let itemData
  favoritesArray.forEach(async (savedItem) => {
    itemData = allDataArray.find(item => item.id === savedItem.itemId);
    //itemData =  await getItemById(savedItem.itemId)
    //console.log('itemData')
    //console.log(itemData)
    savedItemsDetailsArray.push(itemData)
    })  
  console.log('END createSavedItemsDetailsArray')
}

// part 2: search 
form.addEventListener("submit", async (e)=> {
  console.clear()
  console.log('submit to search all data click event handler')
  e.preventDefault()
  let query = e.target.elements["query"].value
  searchedArray = await searchAllData(query)
  console.log(`Searched Data Array`)
  console.log(searchedArray)
  renderData('searched', searchedArray, searchedList)
})

// part 3: add item to favorites
searchedList.addEventListener("click", async (e) => {
  console.clear()
  console.log('add item to favorites click event handler')
  if (e.target.classList.contains("add-button")) {
    let listItem = e.target.parentNode
    console.log(`listItem:`)
    console.log(listItem)
    let selectedIndex = Array.from(searchedList.children).indexOf(listItem)
    console.log(`selectedIndex: ${selectedIndex}`)
    let selectedItem = searchedArray[selectedIndex]
    console.log(`selectedItem:`)
    console.log(selectedItem)
    console.log(`selected id: ${selectedItem.id}`)
    let tempArray = []
    tempArray = await getSavedItemByIdQuery(selectedItem.id)
    console.log('tempArray')
    console.log(tempArray)
    if(tempArray.length != 0){
      showAlert(listItem.children[1], 'error', 'already in favorites', 2000)
    }else{
      await saveFavoriteItem(selectedItem.id)
      showAlert(listItem.children[1], 'success', 'added to favorites', 2000)
    }
  }
})

// part 4: delete item from favorites
favoritesList.addEventListener("click", async (e)=> {
  console.clear()
  console.log('delete item from favorites click event handler')
  if (e.target.classList.contains("delete-button")) {
    let listItem = e.target.parentNode
    let selectedIndex = Array.from(favoritesList.children).indexOf(listItem)
    console.log('selectedIndex = ', selectedIndex)
    let selectedItem = favoritesArray[selectedIndex]
    console.log('selectedItem')
    console.log(selectedItem)
    console.log('selectedItem.id', selectedItem.id)
    await deleteFavoriteItem(selectedItem.id)
    await createSavedItemsDetailsArray()
    renderData('favorites', savedItemsDetailsArray, favoritesList)
  }
})