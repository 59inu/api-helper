/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from './types'
import { AxiosInstance, AxiosRequestConfig } from 'axios'

export const createGetRequest =
  (
    axiosInstance: AxiosInstance,
    requestHandler: RequestHandler 
  ) =>
  async <Data = any>(url: string, config: AxiosRequestConfig = {}) =>
    requestHandler<Data>(axiosInstance, url, { method: 'GET', ...config })

export const createDeleteReqeust =
  (
    axiosInstance: AxiosInstance,
    requestHandler: RequestHandler 
  ) =>
  async <Data = any>(url: string, config: AxiosRequestConfig = {}) =>
    requestHandler<Data>(axiosInstance, url, { method: 'DELETE', ...config })

export const createPostReqeust =
  (
    axiosInstance: AxiosInstance,
    requestHandler: RequestHandler 
  ) =>
  async <ResponseData = any, RequestBody = any>(
    url: string,
    requestBody: RequestBody,
    config: AxiosRequestConfig = {}
  ) =>
    requestHandler<ResponseData>(axiosInstance, url, {
      method: 'POST',
      data: requestBody,
      ...config
    })

export const createPutReqeust =
  (
    axiosInstance: AxiosInstance,
    requestHandler: RequestHandler 
  ) =>
  async <ResponseData = any, RequestBody = any>(
    url: string,
    requestBody: RequestBody,
    config: AxiosRequestConfig = {}
  ) =>
    requestHandler<ResponseData>(axiosInstance, url, {
      method: 'PUT',
      data: requestBody,
      ...config
    })
