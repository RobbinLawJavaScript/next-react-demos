const BASE_URL = "https://lldev.thespacedevs.com/2.2.0"

const getAstronautList = () => {
    return fetch(`${BASE_URL}/astronaut/`)
      .then((response)=> {
          return response.json()
      }).then((data)=> {
          return data
      })

}

export { getAstronautList }