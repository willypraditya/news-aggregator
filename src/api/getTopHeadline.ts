import { AxiosResponse } from 'axios'

import axiosClient from './axiosClient'
import { ApiRequest, ApiResponse } from './types'

export const getTopHeadlines = async ({
  q,
  category,
  page,
}: ApiRequest): Promise<ApiResponse> => {
  try {
    // const country = await fetchCountryCode()

    const params: Record<string, string | number> = {
      country: 'us',
      page: page,
    }

    if (q) {
      params.q = q
    }

    if (category) {
      params.category = category
    }

    const response: AxiosResponse<ApiResponse> = await axiosClient.get(
      '/top-headlines',
      {
        params,
      }
    )

    return response.data
  } catch (error: unknown) {
    console.error('Error fetching top headlines:', (error as Error).message)
    throw new Error('Internal Server Error')
  }
}
