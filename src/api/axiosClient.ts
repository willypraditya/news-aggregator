import axios, { AxiosInstance } from 'axios'

const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NEWS_API,
  params: {
    apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
  },
})

export default axiosClient
