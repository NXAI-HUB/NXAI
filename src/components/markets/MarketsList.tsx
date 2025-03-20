import { motion } from 'framer-motion'
import Link from 'next/link'

// Sample market data
const markets = [
  {
    id: 'market-1',
    title: 'Will Bitcoin reach $100,000 by end of 2025?',
    category: 'Cryptocurrency',
    subcategory: 'Price Prediction',
    endDate: 'Dec 31, 2025',
    volume: '478.5K NXAI',
    participants: 342,
    yesPrice: 0.67,
    noPrice: 0.33,
    trend: 'up',
    trendValue: '+2.4%',
    createdBy: '0x7F23...45aB',
    aiInsight: 'Bullish indicators suggest upward trajectory through 2025',
    verified: true,
    featured: true
  },
  {
    id: 'market-2',
    title: 'Will Ethereum merge to PoS increase TVL by 50%?',
    category: 'Cryptocurrency',
    subcategory: 'Protocol Metrics',
    endDate: 'Apr 15, 2025',
    volume: '356.2K NXAI',
    participants: 245,
    yesPrice: 0.58,
    noPrice: 0.42,
    trend: 'up',
    trendValue: '+1.3%',
    createdBy: '0x2A98...B3cD',
    aiInsight: 'Positive correlation between PoS migration and TVL increases',
    verified: true,
    featured: false
  },
  {
    id: 'market-3',
    title: 'Will the total NFT market cap exceed $100 billion?',
    category: 'NFTs',
    subcategory: 'Market Cap',
    endDate: 'Aug 28, 2025',
    volume: '189.7K NXAI',
    participants: 176,
    yesPrice: 0.34,
    noPrice: 0.66,
    trend: 'down',
    trendValue: '-1.8%',
    createdBy: '0x9F12...D7eF',
    aiInsight: 'Current growth trajectory suggests target unlikely within timeframe',
    verified: true,
    featured: false
  },
  {
    id: 'market-4',
    title: 'Will any country adopt a CBDC as legal tender in 2025?',
    category: 'Regulation',
    subcategory: 'Adoption',
    endDate: 'Dec 31, 2025',
    volume: '421.3K NXAI',
    participants: 289,
    yesPrice: 0.72,
    noPrice: 0.28,
    trend: 'up',
    trendValue: '+3.6%',
    createdBy: '0x5D34...A2bC',
    aiInsight: 'Several countries are in advanced stages of CBDC development',
    verified: true,
    featured: false
  },
  {
    id: 'market-5',
    title: 'Will Solana exceed 100,000 TPS in production by Q3 2025?',
    category: 'Cryptocurrency',
    subcategory: 'Technology',
    endDate: 'Sep 30, 2025',
    volume: '276.8K NXAI',
    participants: 203,
    yesPrice: 0.61,
    noPrice: 0.39,
    trend: 'up',
    trendValue: '+0.8%',
    createdBy: '0x3B45...F1eD',
    aiInsight: 'Development roadmap aligns with target, but technical challenges remain',
    verified: true,
    featured: false
  }
]

export default function MarketsList() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-2xl font-display font-bold text-white mb-4 sm:mb-0">Active Markets</h2>
        
        <div className="flex space-x-2 w-full sm:w-auto">
          <div className="relative flex-grow sm:flex-grow-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search markets"
              className="block w-full bg-background-dark border border-gray-700 rounded-lg py-2 pl-10 pr-3 text-sm text-white focus:outline-none focus:border-primary"
            />
          </div>
          
          <select className="bg-background-dark border border-gray-700 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-primary">
            <option>All Markets</option>
            <option>Trending</option>
            <option>Newest</option>
            <option>Highest Volume</option>
            <option>Closing Soon</option>
          </select>
        </div>
      </div>

      {/* Featured Market */}
      {markets.filter(market => market.featured).map(market => (
        <motion.div
          key={market.id}
          className="card border-2 border-primary overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 bg-primary/20 text-primary text-xs font-medium text-center">
            Featured Market
          </div>
          <div className="p-6">
            <div className="flex flex-wrap justify-between items-start mb-4">
              <div>
                <div className="flex items-center mb-2">
                  <div className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent mr-2">
                    {market.category}
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-400">
                    {market.subcategory}
                  </div>
                  {market.verified && (
                    <div className="ml-2 flex items-center text-primary">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="ml-1 text-xs">Verified</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white">{market.title}</h3>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                market.trend === 'up' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'
              }`}>
                {market.trend === 'up' ? '▲' : '▼'} {market.trendValue}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <div className="text-sm text-green-400 font-medium">Yes: {market.yesPrice * 100}%</div>
                <div className="text-sm text-red-400 font-medium">No: {market.noPrice * 100}%</div>
              </div>
              <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-green-500 rounded-l-full"
                  style={{ width: `${market.yesPrice * 100}%` }}
                ></div>
                <div
                  className="absolute top-0 right-0 h-full bg-red-500 rounded-r-full"
                  style={{ width: `${market.noPrice * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-background-dark/50 rounded-lg p-3 text-center">
                <p className="text-xs text-gray-400">Volume</p>
                <p className="text-lg font-medium text-white">{market.volume}</p>
              </div>
              <div className="bg-background-dark/50 rounded-lg p-3 text-center">
                <p className="text-xs text-gray-400">Participants</p>
                <p className="text-lg font-medium text-white">{market.participants}</p>
              </div>
              <div className="bg-background-dark/50 rounded-lg p-3 text-center">
                <p className="text-xs text-gray-400">Ends</p>
                <p className="text-lg font-medium text-white">{market.endDate}</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-background-dark/30 border border-gray-800 mb-6">
              <div className="flex items-center mb-2">
                <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="ml-2 text-sm font-medium text-white">AI Insight</p>
              </div>
              <p className="text-sm text-gray-300">{market.aiInsight}</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-400">
                Created by <span className="text-primary">{market.createdBy}</span>
              </div>
              <div className="flex space-x-2">
                <button className="btn-primary px-4 py-2 text-sm">
                  Predict Yes
                </button>
                <button className="btn-outline px-4 py-2 text-sm">
                  Predict No
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Regular Markets */}
      {markets.filter(market => !market.featured).map((market, index) => (
        <motion.div
          key={market.id}
          className="card overflow-hidden hover:border-gray-700 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <div className="p-6">
            <div className="flex flex-wrap justify-between items-start mb-4">
              <div>
                <div className="flex items-center mb-2">
                  <div className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent mr-2">
                    {market.category}
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-400">
                    {market.subcategory}
                  </div>
                  {market.verified && (
                    <div className="ml-2 flex items-center text-primary">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="ml-1 text-xs">Verified</span>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white">{market.title}</h3>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                market.trend === 'up' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'
              }`}>
                {market.trend === 'up' ? '▲' : '▼'} {market.trendValue}
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <div className="text-sm text-green-400 font-medium">Yes: {market.yesPrice * 100}%</div>
                <div className="text-sm text-red-400 font-medium">No: {market.noPrice * 100}%</div>
              </div>
              <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-green-500 rounded-l-full"
                  style={{ width: `${market.yesPrice * 100}%` }}
                ></div>
                <div
                  className="absolute top-0 right-0 h-full bg-red-500 rounded-r-full"
                  style={{ width: `${market.noPrice * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between flex-wrap">
              <div className="flex space-x-4 text-sm text-gray-400">
                <div>
                  <span className="font-medium text-white">{market.volume}</span> volume
                </div>
                <div>
                  <span className="font-medium text-white">{market.participants}</span> participants
                </div>
                <div>
                  Ends: <span className="font-medium text-white">{market.endDate}</span>
                </div>
              </div>
              <Link href={`/markets/${market.id}`} className="text-primary text-sm hover:underline">
                View Details
              </Link>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="flex justify-center mt-8">
        <button className="btn-outline">
          Load More Markets
        </button>
      </div>
    </div>
  )
} 