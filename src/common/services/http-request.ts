import axios from 'axios'

import { HttpStatusCode } from '@interfaces/http-status-code'
import { AUTHOR_ID, BASE_ENDPOINT } from '@constants/request'

class HttpRequest implements HttpRequestParams {
  constructor(
    public statusCodes: typeof HttpStatusCode = HttpStatusCode,
    public base: string = BASE_ENDPOINT,
    public endpoint: string = '',
    public headers: Headers = {
      authorId: AUTHOR_ID,
    }
  ) {}

  protected configRequest({ headers, endpoint }: RequestOptions) {
    if (headers) this.headers = headers
    this.endpoint = endpoint
  }

  protected getPath() {
    return `${this.base}/${this.endpoint}`
  }

  protected get<T>(): Promise<T> {
    return axios
      .get(this.getPath(), { headers: this.headers })
      .then((res) => res.data)
      .catch((err) => {
        if (err.response) {
          throw new Error(err.response.data.errors)
        }
        throw new Error(err.message)
      })
  }

  protected post<T>(data: unknown): Promise<T> {
    return axios
      .post(this.getPath(), data, { headers: this.headers })
      .then((res) => res.data)
      .catch((err) => {
        if (err.response) {
          throw new Error(err.response.data.errors)
        }
        throw new Error(err.message)
      })
  }

  protected put<T>(data: unknown): Promise<T> {
    return axios
      .put(this.getPath(), data, { headers: this.headers })
      .then((res) => res.data)
      .catch((err) => {
        if (err.response) {
          throw new Error(err.response.data.errors)
        }
        throw new Error(err.message)
      })
  }

  protected patch<T>(data: unknown): Promise<T> {
    return axios
      .patch(this.getPath(), data, { headers: this.headers })
      .then((res) => res.data)
      .catch((err) => {
        if (err.response) {
          throw new Error(err.response.data.errors)
        }
        throw new Error(err.message)
      })
  }

  protected delete<T>(): Promise<T> {
    return axios
      .delete(this.getPath(), { headers: this.headers })
      .then((res) => res.data)
      .catch((err) => {
        if (err.response) {
          throw new Error(err.response.data.errors)
        }
        throw new Error(err.message)
      })
  }
}

type Headers = Record<string, string>

type RequestOptions = {
  headers?: Headers
  endpoint: string
}

interface HttpRequestParams {
  statusCodes: typeof HttpStatusCode
  endpoint: string
  base: string
  headers?: Headers
}

export default HttpRequest
