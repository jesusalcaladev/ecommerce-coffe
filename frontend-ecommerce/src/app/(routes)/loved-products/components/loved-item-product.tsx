import ProductImageMinuature from '@/components/shared/product-image-minuature'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'
import { useLovedProducts } from '@/hooks/use-loved-products'
import { formatPrice } from '@/lib/format-prices'
import { cn } from '@/lib/utils'
import { Product } from '@/types/product'
import { X } from 'lucide-react'

type LovedItemProductProps = {
  product: Product
}

export default function LovedItemProduct({ product }: LovedItemProductProps) {
  const { addItem } = useCart()
  const { removeLovedProduct } = useLovedProducts()

  const addToCheckout = () => {
    addItem(product)
    removeLovedProduct(product.id)
  }

  return (
    <li className='flex border-b py-6'>
      <ProductImageMinuature
        imagesUrl={product.images[0].url}
        slug={product.slug}
      />
      <div className='flex justify-between flex-1 px-6'>
        <div>
          <h2 className='text-lg font-bold'>{product.productName}</h2>
          <p className='font-bold'>{formatPrice(product.price)}</p>
          <div className='flex justify-between items-center gap-3 mt-2'>
            <Badge>{product.taste}</Badge>
            <Badge variant={'destructive'}>{product.origin}</Badge>
          </div>
          <Button className='mt-5 rounded-full' onClick={addToCheckout}>
            Añadir al carrito
          </Button>
        </div>
        <div>
          <button
            className={cn(
              'rounded-full flex items-center justify-center shadow-md p-1 hover:scale-110 transition '
            )}
          >
            <X size={20} onClick={() => removeLovedProduct(product.id)} />
          </button>
        </div>
      </div>
    </li>
  )
}
