/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Image } from '@/types/product'
import { useEffect, useState } from 'react'

interface CarouselProductProps {
  images: Image[]
}

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

// cast UI components to any to avoid React types mismatch in JSX
const CarouselAny = Carousel as any
const CarouselContentAny = CarouselContent as any
const CarouselItemAny = CarouselItem as any
const CarouselNextAny = CarouselNext as any
const CarouselPreviousAny = CarouselPrevious as any

export default function CarouselProduct({ images }: CarouselProductProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className='sm:px-16'>
      <CarouselAny setApi={setApi}>
        <CarouselContentAny>
          {images?.map?.((image) => (
            <CarouselItemAny key={image.id}>
              <img
                src={`${BACKEND_URL}${image.url}`}
                className='rounded-lg w-full h-full'
              />
            </CarouselItemAny>
          ))}
        </CarouselContentAny>
        <CarouselPreviousAny />
        <CarouselNextAny />
      </CarouselAny>
      <div className='py-2 text-center text-sm text-muted-foreground'>
        Imagenes {current} para {count}
      </div>
    </div>
  )
}
