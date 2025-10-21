'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/hooks/use-cart'
import { formatPrice } from '@/lib/format-prices'
import { CartItem } from './components/cart-item'
import { loadStripe } from '@stripe/stripe-js'
import { makePaymentRequest } from '@/services/payment'
import { useSession } from 'next-auth/react'
import { toast } from '@/hooks/use-toast'

export default function CardPage() {
  const { items, clearCart } = useCart()
  const { status } = useSession()
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ''
  )
  const buyStripe = async () => {
    if (status === 'unauthenticated') {
      toast({
        title: 'Inicia sesión',
        description: 'Para comprar, debes iniciar sesión',
      })
      return
    }
    try {
      const stripe = await stripePromise
      const res = await makePaymentRequest.post('/api/orders', {
        products: items,
      })
      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      })
      clearCart()
    } catch (error) {
      console.log(error)
    }
  }

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
          <div className='p-6 rounded-lg dark:bg-neutral-950 dark:border-[1px] bg-slate-100'>
            {React.createElement(Separator as any)}
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
              <Button className='w-full' onClick={() => buyStripe()}>
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
