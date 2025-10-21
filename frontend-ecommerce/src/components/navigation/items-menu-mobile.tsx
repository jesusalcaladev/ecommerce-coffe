import { Menu } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import Link from 'next/link'

const PopoverAny = Popover as any
const PopoverTriggerAny = PopoverTrigger as any
const PopoverContentAny = PopoverContent as any


export default function ItemsMenuMobile() {
  return (
    <PopoverAny>
      <PopoverTriggerAny>
        <Menu strokeWidth={1.5} className='cursor-pointer' />
      </PopoverTriggerAny>
      <PopoverContentAny>
        <Link className='block' href='/category/cafes-con-leche'>
          Cafè con leche
        </Link>
        <Link className='block' href='/category/cafes-clasicos'>
          Cafè clasico
        </Link>
        <Link className='block' href='/category/cafe-dulces'>
          Cafè dulces
        </Link>
      </PopoverContentAny>
    </PopoverAny>
  )
}
