'use client'
import { useGetProductsCategory } from '@/hooks/use-get-products-category'
import { useParams } from 'next/navigation'
import SkeletonSchema from '@/components/skeleton-schema'
import ProductCard from './components/product-card'
import { useEffect, useState } from 'react'
import FilterOrigin from './components/filter-origin'

export default function CategorySlugPage() {
  const params = useParams()
  const { data, isLoading } = useGetProductsCategory(params.slug as string)
  const [filterOrigin, setFilterOrigin] = useState('')
  const query = new URLSearchParams(window.location.search)

  const handleFilterOrigin = (value: string) => {
    query.set('origin', value)
    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}?${query}`
    )
    setFilterOrigin(value)
  }

  useEffect(() => {
    if (query.get('origin')) {
      setFilterOrigin(query.get('origin') as string)
    }
  }, [query])

  const filtersProducts =
    filterOrigin === ''
      ? data
      : data?.filter?.((product) => product.origin === filterOrigin)

  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
      {data !== null && !isLoading && (
        <h1 className='text-3xl font-medium'>
          {data[0]?.category?.categoryName}
        </h1>
      )}
      <div className='sm:flex sm:justify-between'>
        <div className='sm:w-[350px] sm:mt-5 p-6'>
          <FilterOrigin onChangeFilter={handleFilterOrigin} />
        </div>
        <div className='grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10'>
          {isLoading && <SkeletonSchema grid={3} />}
          {}
          {!isLoading &&
            filtersProducts !== null &&
            filtersProducts?.map?.((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          {filtersProducts !== null &&
            !isLoading &&
            filtersProducts?.length === 0 && (
              <p className='text-xl mx-auto w-full text-center'>
                No hay productos con este filtro.
              </p>
            )}
        </div>
      </div>
    </div>
  )
}
