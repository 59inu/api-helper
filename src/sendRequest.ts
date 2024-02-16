import { ApiError } from './ApiError'
import { ApiResponse } from './ApiResponse'
import { RequestHandler } from './types'
import { AxiosError } from 'axios'

export const sendRequest: RequestHandler = async (
  axiosInstance,
  url,
  config = {}
) => {
  try {
    const result = await axiosInstance.request({
      url,
      ...config
    })

    // ApiError: api result error
    if (result.data.status.code !== 'SUCCESS') {
      throw ApiError.from(result)
    }

    // ApiResponse: api result success
    return ApiResponse.from(result)
  } catch (e) {
    // AxiosError To ApiError
    if (e instanceof AxiosError) {
      throw ApiError.from(e)
    }
    // ApiError or Unkown Error
    throw e
  }
}
