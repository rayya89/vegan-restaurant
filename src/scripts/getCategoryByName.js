import restaurantData from '../data/restaurantData.json'

export default function getCategoryByName(categoryName) {
  return (
    restaurantData.filter(category => category.name === categoryName)
  )
}
