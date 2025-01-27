import Link from 'next/link'
import { buttonVariants } from './ui/button'

export default function BannerProducts() {
  return (
    <>
      <div className='mt-4 text-center'>
        <p>Sumèrgete en una experiència ùnica</p>
        <h4 className='mt-2 text-5xl font-extrabold uppercase'>
          CafèExquisito
        </h4>
        <p className='my-2 text-lg'>Despierta tus sentidos con cada sorbo</p>
        <Link href={'/product'} className={buttonVariants()}>
          Comprar
        </Link>
      </div>
      <div
        className='h-[350px] lg:h-[600px] bg-center bg-cover bg-no-repeat mt-5'
        style={{
          backgroundImage: 'url(/5.jpg)',
        }}
      ></div>
    </>
  )
}
