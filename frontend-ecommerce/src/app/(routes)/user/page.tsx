/* eslint-disable @next/next/no-img-element */
'use client'
import { Button } from '@/components/ui/button'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const ButtonAny = Button as unknown as any

const PageUser = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  return (
    <div className='max-w-5xl p-4 mx-auto flex flex-col items-center justify-center sm:py-16 sm:px-24'>
      {status === 'authenticated' && (
        <div className='flex mx-auto flex-row items-center gap-4'>
          <img
            src={session?.user?.image ?? ''}
            className='rounded-full size-32'
            alt='Profile Picture'
          />
          <div className='flex flex-col gap-y-1'>
            <p className='font-bold text-2xl'>{session?.user?.name}</p>
            <p>{session?.user?.email}</p>
          </div>
        </div>)}
      {status === 'authenticated' ? (
        <ButtonAny variant={'outline'} className='mt-4' onClick={() => signOut()}>
          Cerrar Sesión
        </ButtonAny>
      ) : (
        <>
          <h1 className='text-2xl mb-2'>No tienes sesión iniciada</h1>
          <p className='w-[50%] mb-4 text-center'>
            Para acceder a tu cuenta, por favor inicia sesión. Si no tienes una
            cuenta, puedes registrarte.
          </p>
          <ButtonAny onClick={() => router.push('/')}>Ir a la tienda</ButtonAny>
        </>
      )}
    </div>
  )
}

export default PageUser
