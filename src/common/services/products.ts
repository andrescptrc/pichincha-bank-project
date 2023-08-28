import { Product } from '@interfaces/products'
import HttpRequest from './http-request'

export class ProductsService extends HttpRequest {
  async getProducts() {
    this.configRequest({
      endpoint: 'bp/products',
    })

    return this.get<Product[]>()
  }

  async createProduct(product: Product) {
    this.configRequest({
      endpoint: 'bp/products',
    })

    return this.post(product)
  }

  async deleteProduct(id: string) {
    this.configRequest({
      endpoint: `bp/products?id=${id}`,
    })

    return this.delete()
  }

  async editProduct(values: Product) {
    this.configRequest({
      endpoint: 'bp/products',
    })

    return this.put(values)
  }
}
