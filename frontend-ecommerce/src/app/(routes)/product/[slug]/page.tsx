'use client'

import { useGetProduct } from '@/hooks/use-get-product'
import { useParams } from 'next/navigation'
import SkeletonProduct from './components/skeleton-product'
import CarouselProduct from './components/carousel-product'
import InfoProduct from './components/info-product'

export default function ProductSlugPage() {
  const params = useParams()
  const { data, isLoading } = useGetProduct(params.slug as string)

  if (isLoading) return <SkeletonProduct />

  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-32 sm:px-24'>
      <div className='grid sm:grid-cols-2'>
        <div>
          <CarouselProduct images={data?.images} />
        </div>
        <div className='sm:px-12'>
          <InfoProduct product={data} />
        </div>
      </div>
    </div>
  )
}
