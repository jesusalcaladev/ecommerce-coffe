/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import { Badge } from '@/components/ui/badge'
import { useCart } from '@/hooks/use-cart'
import { formatPrice } from '@/lib/format-prices'
import { cn } from '@/lib/utils'
import { Product } from '@/types/product'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface CartItemProps {
  item: Product
}

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export function CartItem({ item }: CartItemProps) {
  const { removeItem } = useCart()
  const router = useRouter()
  return (
    <li className='flex py-6 border-b'>
      <div
        onClick={() => router.push(`/product/${item.slug}`)}
        className='cursor-pointer'
      >
        <img
          src={`${BACKEND_URL}${item.images[0].url}`}
          alt={`${item.productName} to Image`}
          className='size-24 rounded-md overflow-hidden sm:w-auto sm:h-32'
        />
      </div>
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
