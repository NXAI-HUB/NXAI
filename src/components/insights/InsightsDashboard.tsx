import { motion } from 'framer-motion'

// Sample market data for the dashboard
const marketData = [
  {
    id: 1,
    symbol: 'BTC',
    name: 'Bitcoin',
    price: '$43,265.78',
    change: '+2.34%',
    sentiment: 78,
    trend: 'bullish',
    prediction: {
      value: '+4.2%',
      timeframe: '24h',
      confidence: 'high'
    }
  },
  {
    id: 2,
    symbol: 'ETH',
    name: 'Ethereum',
    price: '$2,832.14',
    change: '+1.67%',
    sentiment: 72,
    trend: 'bullish',
    prediction: {
      value: '+3.5%',
      timeframe: '24h',
      confidence: 'medium'
    }
  },
  {
    id: 3,
    symbol: 'SOL',
    name: 'Solana',
    price: '$129.56',
    change: '-0.87%',
    sentiment: 54,
    trend: 'neutral',
    prediction: {
      value: '+1.2%',
      timeframe: '24h',
      confidence: 'medium'
    }
  },
  {
    id: 4,
    symbol: 'AVAX',
    name: 'Avalanche',
    price: '$38.41',
    change: '+4.21%',
    sentiment: 68,
    trend: 'bullish',
    prediction: {
      value: '+5.7%',
      timeframe: '24h',
      confidence: 'high'
    }
  },
]

export default function InsightsDashboard() {
  return (
    <section className="relative">
      <motion.div
        className="card overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-2xl font-display font-bold text-white">Market Insights Dashboard</h2>
          <p className="mt-2 text-gray-400">
            Real-time AI analysis of market sentiment, trends, and price predictions
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <thead className="bg-background-dark/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Asset
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Change (24h)
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Sentiment
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  AI Prediction
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 bg-background-dark/20">
              {marketData.map((asset) => (
                <tr key={asset.id} className="hover:bg-background-light/10 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {asset.symbol.substring(0, 1)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">{asset.name}</div>
                        <div className="text-sm text-gray-400">{asset.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {asset.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      asset.change.startsWith('+') 
                        ? 'bg-green-900/30 text-green-400' 
                        : 'bg-red-900/30 text-red-400'
                    }`}>
                      {asset.change}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="relative w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`absolute top-0 left-0 h-full rounded-full ${
                            asset.sentiment > 66 ? 'bg-green-500' : 
                            asset.sentiment > 33 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${asset.sentiment}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-xs text-gray-400">{asset.sentiment}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`flex items-center text-sm ${
                      asset.prediction.value.startsWith('+') 
                        ? 'text-green-400' 
                        : 'text-red-400'
                    }`}>
                      <span className="font-medium">{asset.prediction.value}</span>
                      <span className="ml-1 text-gray-400">({asset.prediction.timeframe})</span>
                      <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                        asset.prediction.confidence === 'high' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-gray-700 text-gray-400'
                      }`}>
                        {asset.prediction.confidence}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-gray-800 flex justify-between items-center bg-background-dark/30">
          <p className="text-xs text-gray-400">
            Updated 2 minutes ago • AI Confidence: 87%
          </p>
          <button className="text-primary text-sm hover:underline flex items-center">
            See Complete Analysis
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  )
} 