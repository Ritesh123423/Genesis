import type { Metadata } from 'next'
import ProductsHero from './ProductsHero'
import ProductGrid from './ProductGrid'

export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Explore the GENESIS product ecosystem - eight intelligent automation solutions for professional and business workflows.',
}

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductGrid />
    </>
  )
}
