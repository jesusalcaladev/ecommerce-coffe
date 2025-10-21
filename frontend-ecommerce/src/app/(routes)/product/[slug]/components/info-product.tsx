import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/hooks/use-cart'
import { useLovedProducts } from '@/hooks/use-loved-products'
import { formatPrice } from '@/lib/format-prices'
import { cn } from '@/lib/utils'
import { Product } from '@/types/product'
import { Heart } from 'lucide-react'

const ButtonAny: any = Button

interface InfoProductProps {
  product: Product
}

export default function InfoProduct({ product }: InfoProductProps) {
  const { addItem } = useCart()
  const { addLovedProduct, lovedProducts, removeLovedProduct } =
    useLovedProducts()

  const isFavoriteProduct = lovedProducts.find(
    (product) => product.id === product.id
  )

  return (
    <div className='px-6'>
      <div className='justify-between mb-3 sm:flex'>
        <h1 className='text-2xl'>{product.productName}</h1>
        <div className='flex items-center justify-between gap-3'>
          <Badge>{product.taste}</Badge>
          <Badge variant={'destructive'}>{product.origin}</Badge>
        </div>
      </div>
      <div className='flex items-center gap-5'>
        <ButtonAny className='w-full' onClick={() => addItem(product)}>
          Comprar
        </ButtonAny>
        <Heart
          onClick={() => {
            if (isFavoriteProduct) {
              removeLovedProduct(product.id)
            } else {
              addLovedProduct(product)
            }
          }}
          width={30}
          strokeWidth={1.25}
          className={cn(
            'transition duration-300 cursor-pointer',
            isFavoriteProduct && 'fill-black',
            !isFavoriteProduct && 'hover:fill-black'
          )}
        />
      </div>
    </div>
  )
}
