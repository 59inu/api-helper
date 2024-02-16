import {
    createDeleteReqeust,
    createGetRequest,
    createPostReqeust,
    createPutReqeust,
    sendRequest
  } from './src'
  import axios from 'axios'
  
  const apiInstance = axios.create({
    baseURL: process.env.API_BASE_URL
  })
  
  apiInstance.interceptors.request.use((v) => {
    // TODO: modify header; tz...
    console.log('Request Interceptor: On Fulfilled', v)
  
    return v
  })
  
  apiInstance.interceptors.response.use(undefined, (e) => {
    // TODO: common handler; token expired ...
    console.log('Response Interceptor: On Rejected', e)
    throw e
  })
  
  export const api = {
    get: createGetRequest(apiInstance, sendRequest),
    post: createPostReqeust(apiInstance, sendRequest),
    put: createPutReqeust(apiInstance, sendRequest),
    delete: createDeleteReqeust(apiInstance, sendRequest)
  }
  
/*********************************
 Get
 *********************************/

interface User {
    name: string
    age: string
}

interface GetUsersResponseData {
    users: User[]
}

const getUsers = () => api.get<GetUsersResponseData>('/users')

  
/*********************************
 Post
 *********************************/

type CreateUserResponseData = null
interface CreateUserRequestBody {
  name:string 
  age:number
}

const createUser = (name:string, age:number) => api.post<CreateUserResponseData, CreateUserRequestBody>('/users', {name,age})  
