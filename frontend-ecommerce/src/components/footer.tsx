import Link from 'next/link'
import { Separator } from './ui/separator'

const dataFooter = [
  {
    id: 1,
    title: 'Sobre nosotros',
    href: '#',
  },
  {
    id: 2,
    title: 'Productos',
    href: '/product',
  },
  {
    id: 3,
    title: 'Politicas de Privacidad',
    href: '#',
  },
]

export default function Footer() {
  return (
    <footer className='mt-4'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <p>
            <span className='font-bold'>fluwCoffee</span>
            E-commerce
          </p>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
            {dataFooter.map((item) => (
              <li key={item.id}>
                <Link className='hover:underline me-4 md:me-6' href={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg-my-8' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          &copy; {new Date().getFullYear()} <Link href='#'>fluwCoffee </Link>
          Todos los derechos
        </span>
      </div>
    </footer>
  )
}
