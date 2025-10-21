/* eslint-disable @next/next/no-img-element */
'use client'
import { Product as ProductType } from '@/types/product'
import { Card, CardContent } from '../ui/card'
import IconButton from '../icon-button'
import { Expand, ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/hooks/use-cart'
import { Badge } from '../ui/badge'
import { formatPrice } from '@/lib/format-prices'

interface ProductProps {
  product: ProductType
}

const CardAny = Card as any
const CardContentAny = CardContent as any

const URL_BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL

export default function Product({ product }: ProductProps) {
  const router = useRouter()
  const { addItem } = useCart()
  return (
    <li className='md:basis-1/2 lg:basis-1/3 group'>
      <div className='p-1'>
        <CardAny className='py-4 border border-gray-200 shadow-none'>
          <CardContentAny className='relative flex items-center justify-center px-6 py-2'>
            <img
              src={`${URL_BACKEND}${product.images[0].url}`}
              alt={product.productName}
              className='h-[250px] bg-contain w-[250px] rounded-xl'
            />
            <div className='absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5'>
              <div className='flex justify-center gap-x-6'>
                <IconButton
                  className='text-gray-600'
                  icon={<Expand size={20} strokeWidth={1.5} />}
                  onClick={() => router.push(`/product/${product.slug}`)}
                />
                <IconButton
                  icon={
                    <ShoppingCart
                      className='text-gray-600'
                      size={20}
                      strokeWidth={1.5}
                    />
                  }
                  onClick={() => addItem(product)}
                />
              </div>
            </div>
          </CardContentAny>
          <div className='flex justify-between gap-4 px-8'>
            <h3 className='text-lg font-bold'>{product.productName}</h3>
            <div className='flex items-center justify-between gap-3'>
              <Badge>{product.taste}</Badge>
              <Badge variant={'destructive'}>{product.origin}</Badge>
            </div>
          </div>
          <div className='flex flex-col gap-2 px-8'>
            <p>{formatPrice(product.price)}</p>
          </div>
        </CardAny>
      </div>
    </li>
  )
}
