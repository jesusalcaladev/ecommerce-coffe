import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/hooks/use-cart'
import { formatPrice } from '@/lib/format-prices'
import { Product } from '@/types/product'
import { Heart } from 'lucide-react'

interface InfoProductProps {
  product: Product
}

export default function InfoProduct({ product }: InfoProductProps) {
  const { addItem } = useCart()
  return (
    <div className='px-6'>
      <div className='justify-between mb-3 sm:flex'>
        <h1 className='text-2xl'>{product.productName}</h1>
        <div className='flex items-center justify-between gap-3'>
          <Badge>{product.taste}</Badge>
          <Badge variant={'destructive'}>{product.origin}</Badge>
        </div>
      </div>
      <Separator className='my-4' />
      <p className=''>{product.description}</p>
      <Separator className='my-4' />
      <p className='my-4 text-2xl'>{formatPrice(product.price)}</p>
      <div className='flex items-center gap-5'>
        <Button className='w-full' onClick={() => addItem(product)}>
          Comprar
        </Button>
        <Heart
          onClick={() => console.log('Add to love')}
          width={30}
          strokeWidth={1.25}
          className='transition duration-300 cursor-pointer hover:fill-black'
        />
      </div>
    </div>
  )
}
