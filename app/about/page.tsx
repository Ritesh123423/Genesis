import type { Metadata } from 'next'
import AboutHero from './AboutHero'
import WhoWeAre from './WhoWeAre'
import OurMission from './OurMission'
import OurPhilosophy from './OurPhilosophy'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about GENESIS - our mission, vision, and approach to building intelligent automation technology.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <OurMission />
      <OurPhilosophy />
    </>
  )
}
