/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client'

import { useGetCategory } from '@/hooks/use-get-category'
import Link from 'next/link'

const URL_BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL

export default function ChooseCategory() {
  const { data, isLoading } = useGetCategory()
  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
      <h3 className='px-6 pb-4 mx-auto text-center font-semibold text-3xl sm:pb-8'>
        Elige tu categoría favorita
      </h3>
      <div className='grid gap-5 sm:grid-cols-3'>
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
          data !== undefined &&
          data?.map?.((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className='relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg'
            >
              <img
                className='w-full h-full max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110'
                alt={`${category.categoryName} image`}
                src={`${URL_BACKEND}${category.mainImage[0].url}`}
              />
              <p className='absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg'>
                {category.categoryName}
              </p>
            </Link>
          ))}
      </div>
    </div>
  )
}
