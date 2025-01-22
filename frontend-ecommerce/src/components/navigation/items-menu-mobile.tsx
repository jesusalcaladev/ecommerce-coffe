import { Menu } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import Link from 'next/link'

export default function ItemsMenuMobile() {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu strokeWidth={1.5} className='cursor-pointer' />
      </PopoverTrigger>
      <PopoverContent>
        <Link className='block' href='/category/cafe-molido'>
          Cafè Molido
        </Link>
        <Link className='block' href='/category/cafe-grano'>
          Cafè en grano
        </Link>
        <Link className='block' href='/category/cafe-espuma'>
          Cafè con Espuma
        </Link>
      </PopoverContent>
    </Popover>
  )
}
