import Product from '@/components/shared/product'
import { getProducts } from '@/services/products'
import { Product as ProductType } from '@/types/product'
import { Suspense } from 'react'

export default async function ProductPage() {
  const products: ProductType[] = await getProducts()
  return (
    <div className='max-w-4xl py-4 mx-auto sm:py-24'>
      <Suspense fallback={<div>Cargando Productos</div>}>
        <ul className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5 mt-10'>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ul>
      </Suspense>
    </div>
  )
}
