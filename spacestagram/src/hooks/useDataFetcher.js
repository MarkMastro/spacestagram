import axios from 'axios'

const useDataFetcher = () => {

    //use nasas search api to find posts corresponding to search terms
  const searchAPI = (searchField) => {
    const url = `https://images-api.nasa.gov/search?q=${searchField}&media_type=image`
    return axios.get(url)
      .then((response) => {
        const itemArray = response.data.collection.items
        const resultsArray = []
        console.log('search res', itemArray)
        for (const item of itemArray) {
          const resultObj = {
            picture: item.links[0].href,
            description: item.data[0].description,
            title: item.data[0].title,
            date: item.data[0].date_created
          }
          resultsArray.push(resultObj)
        }
        console.log('results arr', resultsArray)

        return resultsArray
      })
      .catch((err) => console.log('error'))
  }
//get random pictures from nasa's picture of the day api,loads 4 at a time
  const randomPictureAPI = () => {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=U50YdjBHsIpo8n2A4zuws92gF2sXp9T7WDJ64KP9&count=4'
    return axios.get(url)
      .then((response) => {
        const itemArray = response.data
        const resultsArray = []

        for (const item of itemArray) {
          const resultObj = {
            picture: item.hdurl,
            description: item.explanation,
            title: item.title,
            date: item.date
          }
          resultsArray.push(resultObj)
        }
        return resultsArray
      })
      .catch((err) => console.log('error'))
  }
  return { searchAPI, randomPictureAPI }
}
export default useDataFetcher
