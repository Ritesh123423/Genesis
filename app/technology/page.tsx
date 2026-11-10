import type { Metadata } from 'next'
import TechnologyHero from './TechnologyHero'
import TechnologyAreas from './TechnologyAreas'
import TechStack from './TechStack'

export const metadata: Metadata = {
  title: 'Our Technology',
  description: 'Explore the technology areas GENESIS is focused on - from AI and automation to financial technology and enterprise systems.',
}

export default function TechnologyPage() {
  return (
    <>
      <TechnologyHero />
      <TechnologyAreas />
      <TechStack />
    </>
  )
}
