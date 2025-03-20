import { motion } from 'framer-motion'
import { useState } from 'react'

export default function MarketCreation() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 bg-primary/10 border-b border-primary/20">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-display font-bold text-white">Create a New Prediction Market</h3>
          <button 
            className="text-primary hover:text-white transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </button>
        </div>
        {!isExpanded && (
          <p className="mt-2 text-gray-400">
            Create your own prediction market and let the community forecast the outcome.
          </p>
        )}
      </div>

      {isExpanded && (
        <div className="p-6">
          <div className="space-y-6">
            <div>
              <label htmlFor="market-question" className="block text-sm font-medium text-gray-300 mb-1">
                Market Question
              </label>
              <input
                type="text"
                id="market-question"
                className="w-full px-4 py-3 rounded-lg bg-background-dark border border-gray-700 text-white focus:outline-none focus:border-primary"
                placeholder="Will [something] happen by [date]?"
              />
              <p className="mt-1 text-xs text-gray-500">
                Be specific and ensure your question has a clear, verifiable outcome.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="market-category" className="block text-sm font-medium text-gray-300 mb-1">
                  Category
                </label>
                <select 
                  id="market-category"
                  className="w-full px-4 py-3 rounded-lg bg-background-dark border border-gray-700 text-white focus:outline-none focus:border-primary"
                >
                  <option>Cryptocurrency</option>
                  <option>DeFi</option>
                  <option>NFTs</option>
                  <option>Regulation</option>
                  <option>Technology</option>
                  <option>Adoption</option>
                  <option>Governance</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="market-subcategory" className="block text-sm font-medium text-gray-300 mb-1">
                  Sub-category
                </label>
                <select 
                  id="market-subcategory"
                  className="w-full px-4 py-3 rounded-lg bg-background-dark border border-gray-700 text-white focus:outline-none focus:border-primary"
                >
                  <option>Price Prediction</option>
                  <option>Protocol Metrics</option>
                  <option>Adoption</option>
                  <option>Technology</option>
                  <option>Market Cap</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="market-description" className="block text-sm font-medium text-gray-300 mb-1">
                Description
              </label>
              <textarea
                id="market-description"
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-background-dark border border-gray-700 text-white focus:outline-none focus:border-primary"
                placeholder="Provide additional context and details about your prediction market..."
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="resolution-date" className="block text-sm font-medium text-gray-300 mb-1">
                  Resolution Date
                </label>
                <input
                  type="date"
                  id="resolution-date"
                  className="w-full px-4 py-3 rounded-lg bg-background-dark border border-gray-700 text-white focus:outline-none focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="market-liquidity" className="block text-sm font-medium text-gray-300 mb-1">
                  Initial Liquidity (NXAI)
                </label>
                <input
                  type="number"
                  id="market-liquidity"
                  className="w-full px-4 py-3 rounded-lg bg-background-dark border border-gray-700 text-white focus:outline-none focus:border-primary"
                  placeholder="100"
                  min="100"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Minimum 100 NXAI required.
                </p>
              </div>
            </div>
            
            <div>
              <label htmlFor="resolution-source" className="block text-sm font-medium text-gray-300 mb-1">
                Resolution Source
              </label>
              <input
                type="text"
                id="resolution-source"
                className="w-full px-4 py-3 rounded-lg bg-background-dark border border-gray-700 text-white focus:outline-none focus:border-primary"
                placeholder="e.g., CoinGecko, official project announcement, etc."
              />
              <p className="mt-1 text-xs text-gray-500">
                Specify where the outcome data will be sourced from.
              </p>
            </div>
            
            <div className="pt-4 border-t border-gray-800">
              <h4 className="text-sm font-medium text-white mb-3">Market Settings</h4>
              
              <div className="space-y-3">
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 bg-background-dark border-gray-700 rounded text-primary focus:ring-primary" />
                  <span className="ml-2 text-gray-300">Request verification (increases visibility)</span>
                </label>
                
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 bg-background-dark border-gray-700 rounded text-primary focus:ring-primary" />
                  <span className="ml-2 text-gray-300">Use AI assistance for market parameters</span>
                </label>
                
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 bg-background-dark border-gray-700 rounded text-primary focus:ring-primary" />
                  <span className="ml-2 text-gray-300">Allow market discussion</span>
                </label>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 pt-4">
              <button className="btn-outline px-6" onClick={() => setIsExpanded(false)}>
                Cancel
              </button>
              <button className="btn-primary px-6">
                Create Market
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
} 