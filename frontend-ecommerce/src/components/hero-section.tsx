/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { Badge } from './ui/badge'
import { Star } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className='max-w-6xl mx-auto relative overflow-hidden bg-white dark:bg-neutral-950'>
      <div className='absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none'>
        <div className='w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]'></div>
      </div>
      <div className='absolute bottom-0 left-0 w-1/3 h-full opacity-10 pointer-events-none'>
        <div className='w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]'></div>
      </div>

      <div className='container px-4 py-12 mx-auto md:py-20 lg:py-24'>
        <div className='flex flex-col-reverse items-center md:flex-row md:justify-between md:gap-12'>
          <div className='w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left'>
            <Badge className='mb-4 px-3 py-1 text-sm bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-100'>
              DESCUBRE EL ARTE DEL CAFÉ
            </Badge>
            <h1 className='text-4xl font-black tracking-tight md:text-5xl lg:text-6xl mb-4'>
              <span className='block'>Café</span>
              <span className='block'>Premium</span>
              <span className='block text-amber-700 dark:text-amber-500'>
                En todo momento
              </span>
            </h1>
            <p className='mb-8 text-lg text-gray-600 dark:text-gray-300'>
              Nuestros granos garantizan que cada taza sea una delicia. Disfruta
              de la combinación perfecta de sabor y aroma con cada sorbo.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
              <Link
                href='/product'
                className={buttonVariants({
                  size: 'lg',
                  className: 'rounded-full px-8',
                })}
              >
                Comprar Ahora
              </Link>
              <Link
                href='#featured'
                className={buttonVariants({
                  variant: 'outline',
                  size: 'lg',
                  className: 'rounded-full px-8',
                })}
              >
                Ver Destacados
              </Link>
            </div>
            <div className='mt-8 flex items-center justify-center md:justify-start'>
              <div className='flex -space-x-2'>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className='w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden bg-gray-200'
                  >
                    <img
                      src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                      alt='Customer'
                      className='w-full h-full object-cover'
                    />
                  </div>
                ))}
              </div>
              <div className='ml-4'>
                <p className='font-medium'>500+ Clientes Satisfechos</p>
                <div className='flex text-amber-500'>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star fill='currentColor' className='size-3' key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 relative'>
            <div className='relative z-10 flex justify-center'>
              <img
                src='/6.png'
                alt='Premium Coffee'
                className='rounded-lg drop-shadow-md max-w-full h-auto object-cover'
              />
            </div>
            <div className='absolute -bottom-4 -right-4 w-32 h-32 bg-amber-100 dark:bg-amber-900 rounded-full z-0 opacity-70'></div>
            <div className='absolute -top-4 -left-4 w-24 h-24 bg-amber-200 dark:bg-amber-800 rounded-full z-0 opacity-70'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
