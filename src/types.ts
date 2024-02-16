import { ApiResponse } from './ApiResponse'
import { AxiosInstance, AxiosRequestConfig } from 'axios'

export interface CommonResponse<Data = unknown> {
  status: {
    code: string
    message: string
    extra_message?: string
    trace_id?: string
  }
  data?: Data
}

export type RequestHandler = <Data>(
  axiosInstance: AxiosInstance,
  url: string,
  config: AxiosRequestConfig
) => Promise<ApiResponse<Data>>
