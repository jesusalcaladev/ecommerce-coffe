/* eslint-disable @next/next/no-img-element */
'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Cafe con leche',
    href: '/category/cafes-con-leche',
    description:
      'Cafe con leche, difruta de un sabor que te llevara una sensacion magnifica de felicidad y alegria.',
  },
  {
    title: 'Cafe Clasicos',
    href: '/category/cafes-clasicos',
    description:
      'Cafe clasico es un cafe con un sabor especial que te hara sentir un momento especial.',
  },
  {
    title: 'Cafe Dulces',
    href: '/category/cafes-dulces',
    description:
      'Cafe con dulce, difruta de una gran variedad de sabores deliciosos.',
  },
]

const LinkAny = Link as any

export default function MenuList() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <LinkAny
                    className='flex overflow-hidden h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none relative focus:shadow-md'
                    href='/'
                  >
                    <img
                      src='/4.jpg'
                      alt='logo'
                      className='w-full h-full absolute blur-[1px] top-0 left-0 object-cover'
                    />
                    <div className='mb-2 mt-4 text-lg font-medium z-10 text-white'>
                      fluwCoffe
                    </div>
                    <p className='text-sm text-white leading-tight text-muted-foreground z-10'>
                      La mejor manera de comprar café en línea y vivir la
                      experiencia desde tu casa.
                    </p>
                  </LinkAny>
                </NavigationMenuLink>
              </li>
              <ListItem href='/product' title='Tienda'>
                Tienda de café en línea
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cafès</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <LinkAny href='/accessory' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Accesorios
            </NavigationMenuLink>
          </LinkAny>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
