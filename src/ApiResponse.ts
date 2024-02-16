import { CommonResponse } from './types'
import { AxiosResponse } from 'axios'

export class ApiResponse<Data = unknown> {
  raw: AxiosResponse
  data: Data

  constructor(response: AxiosResponse<CommonResponse<Data>>) {
    this.raw = response
    this.data = response.data.data!
  }

  static from<Data>(response: AxiosResponse<CommonResponse<Data>>) {
    return new ApiResponse<Data>(response)
  }
}
