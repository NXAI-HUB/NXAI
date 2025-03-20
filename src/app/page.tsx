import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import AIDemo from '@/components/home/AIDemo'
import PredictionMarkets from '@/components/home/PredictionMarkets'
import Roadmap from '@/components/home/Roadmap'
import Community from '@/components/home/Community'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <Features />
      <AIDemo />
      <PredictionMarkets />
      <Roadmap />
      <Community />
    </div>
  )
} 