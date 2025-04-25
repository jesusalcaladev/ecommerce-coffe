import Link from 'next/link'
import { buttonVariants } from './ui/button'

export default function BannerDiscount() {
  return (
    <div className='py-16 px-4 sm:px-6 lg:px-8 bg-amber-50 dark:bg-amber-900/20 relative overflow-hidden'>
      <div className='absolute -top-10 -right-10 w-40 h-40 bg-amber-200 dark:bg-amber-800/30 rounded-full opacity-50'></div>
      <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-amber-200 dark:bg-amber-800/30 rounded-full opacity-50'></div>

      <div className='max-w-4xl mx-auto text-center relative z-10'>
        <h2 className='uppercase font-black text-3xl md:text-4xl tracking-tight mb-4'>
          Consigue hasta un{' '}
          <span className='text-amber-700 dark:text-amber-500'>-25%</span>
        </h2>
        <h3 className='text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 mb-8'>
          -25% al gastar 30$ en tu compra, usa el código{' '}
          <span className='font-bold bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded'>
            COFFE
          </span>
        </h3>
        <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-8'>
          <Link
            href={'/product'}
            className={buttonVariants({
              size: 'lg',
              className: 'rounded-full px-8',
            })}
          >
            Comprar Ahora
          </Link>
          <Link
            href={'#'}
            className={buttonVariants({
              variant: 'outline',
              size: 'lg',
              className: 'rounded-full px-8',
            })}
          >
            Más información
          </Link>
        </div>
      </div>
    </div>
  )
}
