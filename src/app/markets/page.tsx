import MarketsList from '@/components/markets/MarketsList'
import MarketCategories from '@/components/markets/MarketCategories'
import MarketCreation from '@/components/markets/MarketCreation'

export const metadata = {
  title: 'Prediction Markets | NXAI',
  description: 'Create and participate in decentralized prediction markets with transparent verification and rewards.',
}

export default function MarketsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-white">
            Decentralized <span className="gradient-text">Prediction Markets</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Create and participate in prediction markets powered by collective intelligence
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with categories */}
          <div className="lg:col-span-1">
            <MarketCategories />
          </div>
          
          {/* Main content with markets list */}
          <div className="lg:col-span-3">
            <MarketsList />
            <div className="mt-12">
              <MarketCreation />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 