/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client'

import IconButton from '@/components/icon-button'
import { Badge } from '@/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { formatPrice } from '@/lib/format-prices'
import { Product } from '@/types/product'
import { Expand, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface ProductCardProps {
  product: Product
}

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter()
  return (
    <Link
      href={`/product/${product.slug}`}
      className='relative p-2 transition-all duration-100 rounded-lg hover:shadow-md'
    >
      <div className='absolute flex items-center justify-between gap-3 px-2 z-[1] top-4'>
        <Badge>{product.taste}</Badge>
        <Badge variant={'destructive'}>{product.origin}</Badge>
      </div>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-full max-w-sm'
      >
        <CarouselContent>
          {product.images.map((images) => (
            <CarouselItem key={images.id} className='group'>
              <img src={`${BACKEND_URL}${images.url}`} className='rounded-xl' />
              <div className='absolute w-full px-6 transition duration-300 opacity-0 group-hover:opacity-100 bottom-5'>
                <div className='flex justify-center gap-x-6'>
                  <IconButton
                    onClick={() => router.push(`/product/${product.slug}`)}
                    icon={<Expand size={20} className='text-gray-600' />}
                  />
                  <IconButton
                    onClick={() => router.push('/')}
                    icon={<ShoppingCart size={20} className='text-gray-600' />}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className='text-2xl text-center'>{product.productName}</p>
      <p className='font-bold text-center'>{formatPrice(product.price)}</p>
    </Link>
  )
}
