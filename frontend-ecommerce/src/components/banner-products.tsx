import Link from 'next/link'
import { buttonVariants } from './ui/button'

export default function BannerProducts() {
  return (
    <div className='relative overflow-hidden py-16 bg-white dark:bg-neutral-950'>
      <div className='absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none'>
        <div className='w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]'></div>
      </div>

      <div className='container mx-auto px-4'>
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <p className='text-amber-700 dark:text-amber-500 font-medium mb-2'>
            Sumèrgete en una experiència ùnica
          </p>
          <h2 className='text-4xl md:text-5xl font-black uppercase tracking-tight mb-4'>
            Cafè Exquisito
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 mb-8'>
            Despierta tus sentidos con cada sorbo
          </p>
          <Link
            href={'/product'}
            className={buttonVariants({
              size: 'lg',
              className: 'rounded-full px-8',
            })}
          >
            Comprar Ahora
          </Link>
        </div>
      </div>

      <div className='mt-12 relative'>
        <div
          className='h-[350px] lg:h-[600px] bg-center bg-cover bg-no-repeat'
          style={{
            backgroundImage:
              'url(https://i.pinimg.com/1200x/f3/b5/36/f3b536b62e7f670110bd4e2b22fccc15.jpg)',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className='absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center'>
            <div className='text-white text-center px-4'>
              <h3 className='text-3xl md:text-4xl font-bold mb-4'>
                Descubre Nuestra Colección Premium
              </h3>
              <Link
                href={'/product'}
                className={buttonVariants({
                  variant: 'secondary',
                })}
              >
                Explorar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
