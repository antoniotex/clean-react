/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpPostParams, HttpResponse } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient {
  async post (params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await axios.post(params.url, params.body)
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
