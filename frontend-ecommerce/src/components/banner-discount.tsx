import Link from 'next/link'
import { buttonVariants } from './ui/button'

export default function BannerDiscount() {
  return (
    <div className='p-5 sm:p-20 text-center'>
      <h2 className='uppercase font-black text-2xl'>Consigue hasta un -25%</h2>
      <h3 className='mt-3 font-semibold'>
        -25% al gasta 30$ en tu comprar, usa el código COFFE
      </h3>
      <div className='max-w-md mx-auto sm:flex justify-center gap-8 mt-5'>
        <Link href={'/product'} className={buttonVariants()}>
          Comprar
        </Link>
        <Link href={'#'} className={buttonVariants({ variant: 'outline' })}>
          Màs información
        </Link>
      </div>
    </div>
  )
}
