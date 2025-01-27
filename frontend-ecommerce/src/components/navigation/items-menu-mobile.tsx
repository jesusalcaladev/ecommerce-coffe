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
        <Link className='block' href='/category/cafes-con-leche'>
          Cafè con leche
        </Link>
        <Link className='block' href='/category/cafes-clasicos'>
          Cafè clasico
        </Link>
        <Link className='block' href='/category/cafe-dulces'>
          Cafè dulces
        </Link>
      </PopoverContent>
    </Popover>
  )
}
