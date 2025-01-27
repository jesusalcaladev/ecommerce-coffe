'use client'
import ProductImageMinuature from '@/components/shared/product-image-minuature'
import { Badge } from '@/components/ui/badge'
import { useCart } from '@/hooks/use-cart'
import { formatPrice } from '@/lib/format-prices'
import { cn } from '@/lib/utils'
import { Product } from '@/types/product'
import { X } from 'lucide-react'

interface CartItemProps {
  item: Product
}

export function CartItem({ item }: CartItemProps) {
  const { removeItem } = useCart()
  return (
    <li className='flex py-6 border-b'>
      <ProductImageMinuature imagesUrl={item.images[0].url} slug={item.slug} />
      <div className='flex justify-between flex-1 px-6'>
        <div>
          <p className='text-lg font-bold'>{item.productName}</p>
          <p className='font-bold'>{formatPrice(item.price)}</p>
          <div className='flex items-center justify-between gap-3'>
            <Badge>{item.taste}</Badge>
            <Badge variant={'destructive'}>{item.origin}</Badge>
          </div>
        </div>
        <div>
          <button
            className={cn(
              'rounded-full flex items-center justify-center shadow-md p-1 hover:scale-110 transition '
            )}
          >
            <X size={20} onClick={() => removeItem(item.id)} />
          </button>
        </div>
      </div>
    </li>
  )
}
