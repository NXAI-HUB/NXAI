import { motion } from 'framer-motion'

// Trending insights data
const trendingInsights = [
  {
    id: 1,
    title: 'Bullish signal detected for BTC',
    description: 'Multiple indicators suggest Bitcoin is entering a bullish phase with strong accumulation patterns.',
    timestamp: '2 hours ago',
    confidence: 'high',
    category: 'Technical Analysis',
    metrics: {
      main: 'Rising buy pressure',
      supporting: ['RSI (43.2) trending upward', 'MACD showing bullish crossover', 'Volume increasing 17% week-over-week']
    }
  },
  {
    id: 2,
    title: 'ETH/BTC correlation weakening',
    description: 'Ethereum is showing signs of decoupling from Bitcoin, potentially leading to independent price movement.',
    timestamp: '5 hours ago',
    confidence: 'medium',
    category: 'Correlation Analysis',
    metrics: {
      main: 'Correlation reduced to 0.72',
      supporting: ['30-day correlation trend declining', 'ETH trading volume independent of BTC volatility', 'Increased ETH-specific development activity']
    }
  },
  {
    id: 3,
    title: 'Regulatory sentiment improving',
    description: 'Analysis of recent regulatory statements shows improving sentiment toward crypto across key markets.',
    timestamp: '12 hours ago',
    confidence: 'medium',
    category: 'Sentiment Analysis',
    metrics: {
      main: 'Positive sentiment up 23%',
      supporting: ['Decreased negative mentions in policy documents', 'Increased constructive engagement from regulators', 'More balanced media coverage']
    }
  }
]

export default function InsightsTrending() {
  return (
    <section className="relative">
      <div className="mb-8">
        <h2 className="text-2xl font-display font-bold text-white">Trending Insights</h2>
        <p className="mt-2 text-gray-400">
          Key market movements and patterns identified by our AI
        </p>
      </div>

      <div className="space-y-6">
        {trendingInsights.map((insight, index) => (
          <motion.div
            key={insight.id}
            className="card overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="p-6">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div className="flex items-center mb-2 sm:mb-0">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    insight.category === 'Technical Analysis' ? 'bg-primary/20 text-primary' : 
                    insight.category === 'Correlation Analysis' ? 'bg-accent/20 text-accent' :
                    'bg-secondary/20 text-secondary'
                  }`}>
                    {insight.category}
                  </div>
                  <span className="ml-3 text-sm text-gray-400">{insight.timestamp}</span>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  insight.confidence === 'high' ? 'bg-green-900/30 text-green-400' : 
                  insight.confidence === 'medium' ? 'bg-yellow-900/30 text-yellow-400' :
                  'bg-red-900/30 text-red-400'
                }`}>
                  {insight.confidence} confidence
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{insight.title}</h3>
              <p className="text-gray-300 mb-6">{insight.description}</p>

              <div className="bg-background-dark/50 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <h4 className="ml-2 text-sm font-medium text-white">Key Finding: {insight.metrics.main}</h4>
                </div>
                <ul className="space-y-1 pl-4">
                  {insight.metrics.supporting.map((metric, idx) => (
                    <li key={idx} className="text-sm text-gray-400">• {metric}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 border-t border-gray-800 bg-background-dark/30 flex justify-between items-center">
              <button className="text-accent text-sm hover:underline flex items-center">
                View Full Analysis
              </button>
              <div className="flex space-x-2">
                <button className="p-2 rounded-full bg-background-dark hover:bg-background-light/20 transition-colors">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
                <button className="p-2 rounded-full bg-background-dark hover:bg-background-light/20 transition-colors">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 