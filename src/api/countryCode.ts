import axios from 'axios'

const fetchCountryCode = async () => {
  try {
    const response = await axios.get('https://ipinfo.io/json')
    const countryCode = response.data.country
    return countryCode
  } catch (error) {
    console.error('Error fetching location:', error)
    throw new Error('Failed to fetch location')
  }
}

export default fetchCountryCode
