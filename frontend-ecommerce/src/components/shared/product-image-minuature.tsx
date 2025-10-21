/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

// cast Next.js Link to any to avoid @types/react JSX type mismatch
const LinkAny = Link as any

export default function ProductImageMinuature({
  imagesUrl,
  slug,
}: {
  imagesUrl: string
  slug: string
}) {
  return (
    <LinkAny href={`/product/${slug}`}>
      <img
        src={`${BACKEND_URL}${imagesUrl}`}
        className='size-24 rounded-md overflow-hidden sm:h-32'
      />
    </LinkAny>
  )
}
