'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const ButtonAny = Button as unknown as React.ComponentType<any>

const PageSuccess = () => {
  const router = useRouter()
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  })

  return (
    <div className='max-w-5xl p-4 mx-auto sm:py-16 sm:px-24'>
      <div className='flex flex-col-reverse gap-2 sm:flex-row'>
        <div>
          <h1 className='text-3xl'>👍¡Gracias por tu compra!</h1>
          <p className='my-3'>
            En breve, nuestro equipo se pondrá manos a la obra para seleccionar
            los granos más frescos y preparar tu envío con cuidado y dedicación.
            Mientras tanto, siéntate, relájate y deja que la anticipación del
            delicioso aroma del café recién hecho te envuelva.
          </p>
          <p className='my-3'>
            Gracias de nuevo por confiar en nosotros para satisfacer tu amor por
            el café. ¡Estamos deseando que pruebes nuestros exquisitos sabores!
          </p>
          <p className='my-3'>¡Disfruta del café!</p>

          <ButtonAny onClick={() => router.push('/')}>Volver a la tienda</ButtonAny>
        </div>
      </div>
    </div>
  )
}

export default PageSuccess
