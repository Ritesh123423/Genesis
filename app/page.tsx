import Hero from '@/components/home/Hero'
import BrandStatement from '@/components/home/BrandStatement'
import Vision from '@/components/home/Vision'
import TechnologyPillars from '@/components/home/TechnologyPillars'
import ProductEcosystem from '@/components/home/ProductEcosystem'
import WhyGenesis from '@/components/home/WhyGenesis'
import OurApproach from '@/components/home/OurApproach'
import FutureVision from '@/components/home/FutureVision'
import ClosingCTA from '@/components/home/ClosingCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <Vision />
      <TechnologyPillars />
      <ProductEcosystem />
      <WhyGenesis />
      <OurApproach />
      <FutureVision />
      <ClosingCTA />
    </>
  )
}
