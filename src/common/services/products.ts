import HttpRequest from './http-request'

export class ProductsService extends HttpRequest {
  async getProducts() {
    this.configRequest({
      endpoint: 'bp/products',
    })

    return this.get()
  }
}
