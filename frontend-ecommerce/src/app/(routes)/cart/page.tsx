'use client'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/hooks/use-cart'
import { formatPrice } from '@/lib/format-prices'
import { CartItem } from './components/cart-item'

export default function CardPage() {
  const { items } = useCart()
  return (
    <div className='max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <h1 className='text-3xl font-bold mb-5'>Carrito de compras</h1>
      <div className='grid sm:grid-cols-2 sm:gap-5'>
        <div>
          {items.length === 0 && (
            <p className='text-xl'>Tu carrito está vacío</p>
          )}
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
        <div className='max-w-xl'>
          <div className='p-6 rounded-lg bg-slate-100'>
            <p className='mb-3 text-lg font-semibold'>Resumen del pedido</p>
            <Separator />
            <div className='flex justify-between gap-5 my-4'>
              <span className='flex flex-row gap-1'>
                <p>Precio total:</p>
                <p className='font-semibold'>
                  {formatPrice(
                    items.reduce((acc, item) => acc + item.price, 0)
                  )}
                </p>
              </span>
            </div>
            <div className='flex items-center justify-center w-full mt-3'>
              <Button
                className='w-full'
                onClick={() => console.log('Buy to card')}
              >
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
