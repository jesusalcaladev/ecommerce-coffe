'use client'
import { useLovedProducts } from '@/hooks/use-loved-products'
import LovedItemProduct from './components/loved-item-product'

export default function LovedProductsPage() {
  const { lovedProducts } = useLovedProducts()
  return (
    <div className='max-w-4xl py-4 mx-auto sm:py-32 sm:px-24'>
      <h1 className='sm:text-2xl'>Productos favoritos</h1>
      <div>
        <div>
          {lovedProducts.length === 0 && (
            <p className='mt-5'>No hay productos favoritos</p>
          )}
          <ul>
            {lovedProducts.map((product) => (
              <LovedItemProduct key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
