import restaurantData from '../data/categories.json'

export default function getCategoryByName(categoryName) {
  return (
    restaurantData.filter(category => category.name === categoryName)
  )
}
