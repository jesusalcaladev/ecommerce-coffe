'use client'
import { Separator } from '@/components/ui/separator'
import { useGetProductsCategory } from '@/hooks/use-get-products-category'
import { useParams } from 'next/navigation'
import FilterCategoryControls from './components/filters-category-controls'
import SkeletonSchema from '@/components/skeleton-schema'
import ProductCard from './components/product-card'

export default function CategorySlugPage() {
  const params = useParams()
  const { data, isLoading } = useGetProductsCategory(params.slug as string)
  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
      {data !== null && !isLoading && (
        <h1 className='text-3xl font-medium'>
          {data[0].category.categoryName}
        </h1>
      )}
      <Separator />
      <div className='sm:flex sm:justify-between'>
        <FilterCategoryControls />
        <div className='grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10'>
          {isLoading && <SkeletonSchema grid={3} />}
          {}
          {!isLoading &&
            data !== null &&
            data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  )
}
