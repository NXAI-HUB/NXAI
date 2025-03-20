import { motion } from 'framer-motion'

// Sample prediction market data
const predictionMarkets = [
  {
    id: 1,
    title: 'BTC above $50K by June 2025',
    category: 'Price Prediction',
    probability: 78,
    volume: '342.5K NXAI',
    trend: 'up',
    change: 2.4,
    closes: '14d 6h',
  },
  {
    id: 2,
    title: 'ETH will surpass $3K in Q3 2025',
    category: 'Price Prediction',
    probability: 65,
    volume: '217.8K NXAI',
    trend: 'up',
    change: 4.2,
    closes: '22d 11h',
  },
  {
    id: 3,
    title: 'Solana TVL will exceed $10B',
    category: 'Protocol Metrics',
    probability: 42,
    volume: '164.3K NXAI',
    trend: 'down',
    change: 1.7,
    closes: '9d 3h',
  },
  {
    id: 4,
    title: 'NFT market cap doubles in 2025',
    category: 'Market Trend',
    probability: 31,
    volume: '98.6K NXAI',
    trend: 'down',
    change: 3.5,
    closes: '31d 8h',
  },
]

export default function PredictionMarkets() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Decentralized Prediction Markets
            </h2>
            <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
              Create and participate in prediction markets powered by collective intelligence 
              and secured by blockchain technology.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Markets explanation */}
          <div>
            <motion.div
              className="card h-full flex flex-col justify-between"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-display font-bold text-white">How It Works</h3>
                <p className="mt-4 text-gray-400">
                  Our prediction markets leverage the wisdom of crowds combined with AI insights
                  to provide accurate forecasts for crypto events and metrics.
                </p>
                
                <ul className="mt-8 space-y-6">
                  <motion.li 
                    className="flex"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 flex items-center justify-center rounded-full bg-primary/20 h-10 w-10">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-medium">Create or Join Markets</h4>
                      <p className="mt-1 text-sm text-gray-400">Start a new prediction market or participate in existing ones with NXAI tokens.</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 flex items-center justify-center rounded-full bg-secondary/20 h-10 w-10">
                      <span className="text-secondary font-bold">2</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-medium">Take Positions</h4>
                      <p className="mt-1 text-sm text-gray-400">Back your predictions with tokens and watch as market probabilities adjust in real-time.</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 flex items-center justify-center rounded-full bg-accent/20 h-10 w-10">
                      <span className="text-accent font-bold">3</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-medium">Earn Rewards</h4>
                      <p className="mt-1 text-sm text-gray-400">Collect rewards for accurate predictions and for providing market liquidity.</p>
                    </div>
                  </motion.li>
                </ul>
              </div>
              
              <div className="mt-8">
                <button className="btn-secondary w-full">
                  Create a Prediction Market
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right side - Active Markets */}
          <div>
            <motion.div
              className="card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-display font-bold text-white">Active Markets</h3>
                <button className="text-accent text-sm hover:underline">
                  View All Markets
                </button>
              </div>
              
              <div className="space-y-4">
                {predictionMarkets.map((market) => (
                  <motion.div 
                    key={market.id}
                    className="p-4 rounded-lg bg-background-dark/60 hover:bg-background-dark/90 transition-colors duration-200 cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: market.id * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">{market.category}</span>
                          <span className="ml-2 text-xs text-gray-500">Closes in {market.closes}</span>
                        </div>
                        <h4 className="mt-2 text-white font-medium">{market.title}</h4>
                      </div>
                      <div className="flex items-center">
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          market.trend === 'up' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'
                        }`}>
                          {market.trend === 'up' ? '+' : '-'}{market.change}%
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex items-center">
                      <div className="flex-grow">
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="text-gray-400">Probability</span>
                          <span className="text-white font-medium">{market.probability}%</span>
                        </div>
                        <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`absolute top-0 left-0 h-full rounded-full ${
                              market.probability > 50 ? 'bg-green-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${market.probability}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="ml-4 text-right">
                        <div className="text-xs text-gray-400">Volume</div>
                        <div className="text-sm text-white">{market.volume}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 