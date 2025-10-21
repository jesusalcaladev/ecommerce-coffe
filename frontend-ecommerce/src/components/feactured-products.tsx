/* eslint-disable @next/next/no-img-element */
'use client'

import { useFeaturedGetProducts } from '@/hooks/use-featured-get-products'
import SkeletonSchema from './skeleton-schema'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import { Card, CardContent } from './ui/card'
import { Expand, ShoppingCart } from 'lucide-react'
import IconButton from './icon-button'
import { useRouter } from 'next/navigation'
import { Badge } from './ui/badge'
import { useCart } from '@/hooks/use-cart'

const URL_BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL

// cast UI components to any to avoid React types mismatch in JSX
const CarouselAny = Carousel as any
const CarouselContentAny = CarouselContent as any
const CarouselItemAny = CarouselItem as any
const CarouselNextAny = CarouselNext as any
const CarouselPreviousAny = CarouselPrevious as any

// cast Card components to any to avoid React types mismatch in JSX
const CardAny = Card as any
const CardContentAny = CardContent as any

export default function FeacturedProducts() {
  const { isLoading, data } = useFeaturedGetProducts()
  const router = useRouter()
  const { addItem } = useCart()

  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
      <h3 className='px-6 text-3xl sm:pb-8'>Productos destacados</h3>
      <CarouselAny>
        <CarouselContentAny className='ml-2 md:-ml-4'>
          {isLoading && <SkeletonSchema grid={3} />}
          {data !== null &&
            data.map((product) => {
              return (
                <CarouselItemAny
                  key={product.id}
                  className='md:basis-1/2 lg:basis-1/3 group'
                >
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
                              onClick={() =>
                                router.push(`/product/${product.slug}`)
                              }
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
                        <h3 className='text-lg font-bold'>
                          {product.productName}
                        </h3>
                        <div className='flex items-center justify-between gap-3'>
                          <Badge>{product.taste}</Badge>
                          <Badge variant={'destructive'}>
                            {product.origin}
                          </Badge>
                        </div>
                      </div>
                    </CardAny>
                  </div>
                </CarouselItemAny>
              )
            })}
        </CarouselContentAny>
        <CarouselPreviousAny />
        <CarouselNextAny className='hidden md:flex' />
      </CarouselAny>
    </div>
  )
}
