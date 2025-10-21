import Product from '@/components/shared/product'
import { getProducts } from '@/services/products'
import { Product as ProductType } from '@/types/product'

export default async function ProductPage() {
  let products: ProductType[] = []

  try {
    const res = await getProducts()
    products = Array.isArray(res) ? res : []
  } catch (error) {
    console.error('Failed to fetch products for /product page:', error)
    products = []
  }

  return (
    <div className='max-w-4xl py-4 mx-auto sm:py-24'>
      <ul className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5 mt-10'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}
