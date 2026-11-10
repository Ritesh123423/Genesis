import type { Metadata } from 'next'
import SolutionsHero from './SolutionsHero'
import SolutionCategories from './SolutionCategories'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Discover GENESIS solutions across professional technology, financial operations, enterprise automation and AI intelligence.',
}

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <SolutionCategories />
    </>
  )
}
