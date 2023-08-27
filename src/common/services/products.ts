import { Product } from '@interfaces/products'
import HttpRequest from './http-request'

export class ProductsService extends HttpRequest {
  async getProducts() {
    this.configRequest({
      endpoint: 'bp/products',
    })

    return this.get()
  }

  async createProduct(product: Product) {
    this.configRequest({
      endpoint: 'bp/products',
    })

    return this.post(product)
  }
}
