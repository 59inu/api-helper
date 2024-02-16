import { CommonResponse } from './types'
import { AxiosError, AxiosResponse } from 'axios'

export class ApiError {
  readonly code?: string | number
  readonly message?: string
  readonly response?: AxiosResponse<CommonResponse>

  constructor(
    response?: AxiosResponse,
    code?: string | number,
    message?: string
  ) {
    this.code = code
    this.response = response
    this.message = message
  }

  static from(res: AxiosResponse<CommonResponse> | AxiosError) {
    if (res instanceof AxiosError) {
      return new ApiError(
        res.response,
        res.response?.status,
        res.response?.statusText
      )
    }

    // Convert from AxiosResponse of result error
    return new ApiError(res, res.data.status?.code, res.data.status.message)
  }

  get data() {
    return this.response?.data.data
  }
}
